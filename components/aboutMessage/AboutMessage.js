import React from 'react';
import AboutMessageStyles from './AboutMessageStyles';

const AboutMessage = props => {
  const { children, alt } = props;

  return <AboutMessageStyles alt={alt}>{children}</AboutMessageStyles>;
};

export default AboutMessage;
