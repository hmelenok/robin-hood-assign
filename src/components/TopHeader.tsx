import React from 'react';
import Avatar, { AvatarItem } from '@atlaskit/avatar';
import randomColor from 'randomcolor';
import logo from '../logo.png';

const TopHeader = () => (
  <div style={{
    background: `linear-gradient(90deg, ${randomColor({
      luminosity: 'dark',
      format: 'rgba',
    })} 0%, ${randomColor({
      luminosity: 'dark',
      format: 'rgba',
    })} 35%, ${randomColor({
      luminosity: 'dark',
      format: 'rgba',
    })} 100%)`,
    width: '100%',
  }}
  >
    <AvatarItem
      backgroundColor="transparent"
      avatar={<Avatar src={logo} />}
      primaryText={<span style={{ color: 'white' }}>RobinHood Assign</span>}
    />
  </div>
);

export default TopHeader;
