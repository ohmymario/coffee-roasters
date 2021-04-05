import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import FooterStyles from './FooterStyles';

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

        <ul className="footer-links">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/subscribe">
              <a>Create your plan</a>
            </Link>
          </li>
        </ul>
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
