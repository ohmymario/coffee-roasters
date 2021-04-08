import React from 'react';

import AboutMessageStyles from './AboutMessageStyles';

const AboutMessage = props => {
  const { children, ...restProps } = props;

  return <AboutMessageStyles {...restProps}>{children}</AboutMessageStyles>;
};

export default AboutMessage;
