import React, { useEffect, useState } from 'react';
import './App.css';
// @ts-ignore
import random from 'random-names-places';
// @ts-ignore
import randomColor from 'randomcolor';
import { get, isEmpty, isEqual } from 'lodash';
import * as robohashAvatars from 'robohash-avatars';
import {
  Content,
  LeftSidebarWithoutResize,
  Main,
  PageLayout,
  RightPanel,
  TopNavigation,
} from '@atlaskit/page-layout';
import Button from '@atlaskit/button/standard-button';
import { useHistory } from 'react-router-dom';
import Textfield from '@atlaskit/textfield';
import AddUserBlock from './AddUserBlock';
import TopHeader from './TopHeader';
import User from './User';

const Wrapper = ({
  borderColor,
  children,
  minHeight,
  noOutline,
  noHorizontalScrollbar,
}: {
  borderColor: string;
  children: React.ReactNode;
  minHeight?: string;
  noOutline?: boolean;
  noHorizontalScrollbar?: boolean;
}) => (
  <div
    style={{
      outline: noOutline ? 'none' : `0px dashed ${borderColor}`,
      outlineOffset: -4,
      padding: 8,
      minHeight,
      height: '100%',
      boxSizing: 'border-box',
      overflowY: 'auto',
      overflowX: noHorizontalScrollbar ? 'hidden' : 'auto',
      backgroundColor: 'white',
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
    format: 'hex',
  }),
  avatar: getAvatar(name),
});

let restoredState:any = {};
try {
  restoredState = JSON.parse(decodeURIComponent(window.location.hash.substr(3)));
} catch (e) {
  // Bad Hash
}

function App() {
  const randomName = random.name();
  const history = useHistory();

  const [users, setUsers] = useState([...restoredState.users || [getRandomByName(randomName)]]);
  const [topic, setTopic] = useState(restoredState.topic || '');
  const [currentUserIndex, setUserIndex] = useState(restoredState.currentUserIndex || 0);
  const removeUserByIndex = (index: number) => {
    setUsers([...users
      .filter((_user, currentIndex) => index !== currentIndex)]);
  };
  useEffect(() => {
    if (isEmpty(restoredState) || !isEqual(restoredState, { users, currentUserIndex })) {
      history.push({ hash: JSON.stringify({ users, currentUserIndex, topic }) });
    }
  }, [users, currentUserIndex, topic]);

  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
      </header>
      <PageLayout>

        <TopNavigation
          testId="topNavigation"
          id="product-navigation"
          skipLinkTitle="Product Navigation"
          height={90}
          isFixed={false}
        >
          <Wrapper borderColor="blue">
            <h3 style={{ textAlign: 'center' }}>Assignment queue made easy!</h3>
          </Wrapper>
        </TopNavigation>
        <Content testId="content">
          <LeftSidebarWithoutResize
            testId="leftSidebar"
            id="space-navigation"
            skipLinkTitle="Available users"
            isFixed={false}
            width={325}
          >
            <Wrapper borderColor="darkgreen">
              <div style={{ minWidth: 50, padding: '0 20px' }}>
                <h4 style={{ textAlign: 'center' }}>Available persons</h4>
                <p>
                  {users.map((user, index) => (
                    <User user={user} status={currentUserIndex === index ? 'locked' : undefined} onRemove={() => removeUserByIndex(index)} />

                  ))}
                  <AddUserBlock onSubmit={(formData) => {
                    setUsers([...users, getRandomByName(formData.name)]);
                  }}
                  />
                </p>
              </div>
            </Wrapper>
          </LeftSidebarWithoutResize>
          <Main testId="main" id="main" skipLinkTitle="Current Responsible">
            <Wrapper borderColor="black" minHeight="400px">
              <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Current Responsible for:
                <Textfield width={150} css={{ width: '150px' }} defaultValue={topic} onChange={({ currentTarget: { value } }) => setTopic(value)} placeholder="(Enter topic)" />
              </h4>
              <p>

                {users[currentUserIndex] ? <User user={users[currentUserIndex]} status="locked" /> : 'No responsible'}
              </p>

              <Button
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
          width={225}
        >
          <Wrapper borderColor="orange">
            <h3 style={{ textAlign: 'center' }}>Help Panel</h3>
          </Wrapper>
        </RightPanel>
      </PageLayout>
    </div>
  );
}

export default App;
