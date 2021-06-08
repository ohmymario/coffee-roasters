import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HeaderStyles from './HeaderStyles';
import Navigation from '../navigation/Navigation';
import MobNavigation from '../mobNavigation/MobNavigation';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderStyles open={open}>
      <Image
        src="/images/logo.svg"
        layout="fixed"
        alt="logo"
        width={237}
        height={27}
      />

      <div className="mobNav-Container">
        <button type="button" onClick={() => setOpen(!open)}>
          <Image
            src={
              open
                ? '/images/icons/icon-close.svg'
                : '/images/icons/icon-hamburger.svg'
            }
            layout="fixed"
            alt="menu"
            width={16}
            height={15}
          />
        </button>
        <MobNavigation open={open} setOpen={setOpen} />
      </div>

      <Navigation />
    </HeaderStyles>
  );
};

export default Header;
