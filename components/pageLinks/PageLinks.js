import React from 'react';
import Link from 'next/link';
import PageLinksStyles from './PageLinksStyles';

// THIS WILL BE FOR THE COMPONENT THAT THIS IS MOUNTED ON
// import { routes } from '../constants/routes';

const PageLinks = props => {
  const { routes } = props;
  return (
    <PageLinksStyles>
      {routes.map(({ name, route }, i) => (
        <li key={i}>
          <Link href={route}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </PageLinksStyles>
  );
};

export default PageLinks;
