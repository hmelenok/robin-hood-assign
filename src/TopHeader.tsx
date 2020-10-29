import React from 'react';
import Avatar, { AvatarItem } from '@atlaskit/avatar';
import logo from './logo.png';

const TopHeader = () => (
  <AvatarItem backgroundColor="#a4b57b" avatar={<Avatar src={logo} />} primaryText="RobinHood Assign" />
);

export default TopHeader;
