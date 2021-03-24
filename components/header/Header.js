import React from 'react';
import Image from 'next/image';
import HeaderStyles from './HeaderStyles';
import Navigation from '../navigation/Navigation';

const Header = () => (
  <HeaderStyles>
    <Image
      src="/images/logo.svg"
      layout="fixed"
      alt="Picture of the author"
      width={237}
      height={27}
    />
    <Navigation />
  </HeaderStyles>
);

export default Header;
