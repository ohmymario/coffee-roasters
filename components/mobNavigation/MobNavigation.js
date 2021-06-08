import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

import { MobNavigationStyles, Overlay } from './MobNavigationStyles';
import { routes } from '../../constants/routes';

const mobNavigation = props => {
  const { open, setOpen } = props;

  const closeModal = () => {
    setOpen(false);
  };

  return open
    ? ReactDOM.createPortal(
        <Overlay id="overlay" onClick={() => closeModal()}>
          <MobNavigationStyles>
            {routes.map(({ name, route }, i) => (
              <li key={i}>
                <Link href={route}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </MobNavigationStyles>
        </Overlay>,
        document.body
      )
    : null;
};

export default mobNavigation;
