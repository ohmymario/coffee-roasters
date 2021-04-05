import React from 'react';
import Image from 'next/image';

import FooterStyles from './FooterStyles';
import PageLinks from '../pageLinks/PageLinks';
import { routes } from '../../constants/routes';

const Footer = () => {
  console.log('footer');
  return (
    <FooterStyles>
      <div className="footer">
        <div className="footer-logo">
          <Image
            src="/images/logo-footer.svg"
            layout="fixed"
            alt="logo"
            width={235}
            height={25}
          />
        </div>

        <PageLinks routes={routes} />
      </div>

      <div className="socials">
        <Image
          src="/images/socials/icon-facebook.svg"
          layout="fixed"
          alt="logo"
          width={24}
          height={24}
        />
        <Image
          src="/images/socials/icon-twitter.svg"
          layout="fixed"
          alt="logo"
          width={24}
          height={24}
        />
        <Image
          src="/images/socials/icon-instagram.svg"
          layout="fixed"
          alt="logo"
          width={24}
          height={24}
        />
      </div>
    </FooterStyles>
  );
};

export default Footer;
