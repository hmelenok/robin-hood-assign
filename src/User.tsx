import React from 'react';
import Avatar, { AvatarItem } from '@atlaskit/avatar';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { UserModel } from './types';

const User = ({ user, status, onRemove }:{
  user: UserModel, status: string | undefined, onRemove?: () =>void}) => (
    <AvatarItem
      backgroundColor={user.color}
      avatar={<Avatar src={user.avatar} status={status} />}
      primaryText={(
        <>
          {user.name}
          {' '}
          {onRemove && (
          <span
            role="button"
            tabIndex={0}
            onKeyDown={() => onRemove()}
            onClick={() => onRemove()}
          >
            <CrossIcon
              size="small"
              label="Remove user"
            />
          </span>
          )}

        </>
            )}
    />
);

export default User;
