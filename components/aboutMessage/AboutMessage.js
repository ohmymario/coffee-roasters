import React from 'react';
import AboutMessageStyles from './AboutMessageStyles';

const AboutMessage = props => {
  const { children, primary } = props;

  return <AboutMessageStyles primary={primary}>{children}</AboutMessageStyles>;
};

export default AboutMessage;
