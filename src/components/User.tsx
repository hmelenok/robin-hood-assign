import React from 'react';
import Avatar, { AvatarItem } from '@atlaskit/avatar';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { UserModel } from '../types';

const User = ({
  user, status, onRemove, onSelect,
}:{
  user: UserModel, status: string | undefined, onRemove?: () =>void, onSelect?: () =>void}) => (
    <div style={{
      background: `linear-gradient(90deg, ${user.color} 0%, #f1f1f1 35%, #fff 100%)`,
      width: '100%',
    }}
    >
      <AvatarItem
        backgroundColor="transparent"
        avatar={<Avatar src={user.avatar} status={status} />}
        primaryText={(
          <>
            <span
              role="button"
              tabIndex={-1}
              onKeyDown={() => onSelect && onSelect()}
              onClick={() => onSelect && onSelect()}
            >
              {user.name}
            </span>
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
    </div>
);

export default User;
