import React, { useEffect, useState } from 'react';
import './App.css';
import randomColor from 'randomcolor';
import { compress, decompress } from 'shrink-string';
import { get } from 'lodash';
import debugLib from 'debug';
import * as robohashAvatars from 'robohash-avatars';
import {
  Content,
  LeftSidebarWithoutResize,
  Main,
  PageLayout,
  RightPanel,
} from '@atlaskit/page-layout';
import Button from '@atlaskit/button/standard-button';
import { useHistory } from 'react-router-dom';
import InlineEdit from '@atlaskit/inline-edit';
import TextArea from '@atlaskit/textarea';
import md from 'md';
import InlineMessage from '@atlaskit/inline-message';
import AddUserBlock from './AddUserBlock';
import TopHeader from './components/TopHeader';
import User from './components/User';
import { UserModel } from './types';
import PageTitle from './components/PageTitle';

const debug = debugLib('robin:App');
const Wrapper = ({
  borderColor,
  children,
  minHeight,
  noOutline,
  noHorizontalScrollbar,
}: {
  borderColor?: string;
  children: React.ReactNode;
  minHeight?: string;
  noOutline?: boolean;
  noHorizontalScrollbar?: boolean;
}) => (
  <div
    style={{
      outline: noOutline || !borderColor ? 'none' : `1px solid ${borderColor}`,
      outlineOffset: -4,
      padding: 8,
      minHeight,
      height: '100%',
      boxSizing: 'border-box',
      overflowY: 'auto',
      overflowX: noHorizontalScrollbar ? 'hidden' : 'auto',
      backgroundColor: 'white',
      textAlign: 'left',
    }}
  >
    {children}
  </div>
);

const getAvatar = (name: string) => robohashAvatars.generateAvatar({
  username: name,
  background: robohashAvatars.BackgroundSets.RandomBackground1,
  characters: robohashAvatars.CharacterSets.Kittens,
  height: 400,
  width: 400,
});
const getRandomByName = (name: string) => ({
  name,
  color: randomColor({
    luminosity: 'light',
    format: 'hsl',
  }),
  avatar: getAvatar(name),
});

function App() {
  const history = useHistory();
  // Hack to async restore initial data (should be called once)
  const [restoredState, setRestored] = useState<any>(false);

  const [users, setUsers] = useState<UserModel[]>([]);
  const [topic, setTopic] = useState('');
  const [currentUserIndex, setUserIndex] = useState(0);

  const removeUserByIndex = (index: number) => {
    setUsers([...users
      .filter((_user, currentIndex) => index !== currentIndex)]);
  };
  useEffect(() => {
    (async () => {
      debug('useEffect');
      let restoredStateValue;
      if (!restoredState) {
        try {
          restoredStateValue = JSON.parse(
            await decompress(decodeURIComponent(window.location.hash.substr(3))),
          );
          setRestored(restoredStateValue);
          setUsers(restoredStateValue.users || []);
          setTopic(restoredStateValue.topic || '');
          setUserIndex(restoredStateValue.currentUserIndex || 0);
          debug('restored', { restoredStateValue });
        } catch (e) {
          // Bad Hash
          setRestored({});
          debug('restore skipped %o', restoredStateValue);
        }
      }
      if (restoredState) {
        const state = await compress(JSON.stringify({ users, currentUserIndex, topic }));
        history.push({ hash: state });
        debug('set state %o', { restoredStateValue, restoredState });
      }
    })();
  }, [users, currentUserIndex, topic]);

  return (
    <div className="App">
      <PageTitle />
      <header className="App-header">
        <TopHeader />
      </header>
      <PageLayout>
        <Content testId="content">
          <LeftSidebarWithoutResize
            testId="leftSidebar"
            id="space-navigation"
            skipLinkTitle="Available users"
            isFixed={false}
            width={325}
          >
            <Wrapper>
              <div className="App-assignees">
                <h4>Available Assignees</h4>

                {users.map((user, index) => {
                  const selected = currentUserIndex === index;
                  return (
                    <div className="App-assignee">
                      <User user={user} selected={selected} status={selected ? 'locked' : undefined} onSelect={() => setUserIndex(index)} onRemove={() => removeUserByIndex(index)} />
                    </div>
                  );
                })}
                <AddUserBlock onSubmit={(formData) => {
                  setUsers([...users, getRandomByName(formData.name)]);
                }}
                />
              </div>
            </Wrapper>
          </LeftSidebarWithoutResize>
          <Main testId="main" id="main">
            <Wrapper minHeight="400px">
              <InlineEdit
                defaultValue={topic}
                onConfirm={(value) => setTopic(value)}
                label="Current responsibility:"
                editView={(fieldProps, ref) => (
                  // @ts-ignore
                  <TextArea {...fieldProps} ref={ref} />
                )}
                readView={() => <article style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: md(topic || '(click here to edit)') }} />}
              />
              {users[currentUserIndex] ? <User selected user={users[currentUserIndex]} status="locked" /> : 'No assignees'}
              <Button
                className="App-next"
                css={{}}
                type="submit"
                appearance="primary"
                onClick={() => setUserIndex(get(users, `[${currentUserIndex + 1}]`) ? currentUserIndex + 1 : 0)}
              >
                Set next responsible
              </Button>
            </Wrapper>
          </Main>
        </Content>
        <RightPanel
          testId="rightPanel"
          id="help-panel"
          skipLinkTitle="Help Panel"
          isFixed={false}
          width={325}
        >
          <Wrapper>
            <InlineMessage type="info" secondaryText="FAQ" placement="left-start" />
            <article
              style={{ width: '100%' }}
              dangerouslySetInnerHTML={{
                __html: md(
                  `
### General Flow

- Add people
- Write task details
- Select responsible person
- Copy link and share

#### Caveats
**Works only in current session by hash storing in URL**

Possible solution:
- Edit link in posted chat (yes it huge but it's compressed)
- Send latest link directly to person

----

### Active parts 
#### Available Assignees
Add person name (uniq names are welcome)

#### Current responsibility
Md supported description (click to edit)

#### Current assignee
Person who perform actions

             
            `,
                ),
              }}
            />
          </Wrapper>
        </RightPanel>
      </PageLayout>
    </div>
  );
}

export default App;
