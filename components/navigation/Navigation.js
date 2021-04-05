import React from 'react';

import NavigationStyles from './NavigationStyles';
import PageLinks from '../pageLinks/PageLinks';
import { routes } from '../../constants/routes';

const Navigation = () => (
  <NavigationStyles>
    <PageLinks routes={routes} />
  </NavigationStyles>
);

export default Navigation;
