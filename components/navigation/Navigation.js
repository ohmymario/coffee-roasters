import React from 'react';
import Link from 'next/link';

import NavigationStyles from './NavigationStyles';

const Navigation = () => (
  <NavigationStyles>
    <ul>
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
  </NavigationStyles>
);

export default Navigation;
