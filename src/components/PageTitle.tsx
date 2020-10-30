import React from 'react';
import { Helmet } from 'react-helmet';
import { MAIN_TITLE } from '../helpers';

const PageTitle = ({ userTitle }:{userTitle?: string}) => (
  <Helmet>
    <title>{userTitle ? `${userTitle} | ${MAIN_TITLE}` : MAIN_TITLE}</title>
  </Helmet>
);

export default PageTitle;
