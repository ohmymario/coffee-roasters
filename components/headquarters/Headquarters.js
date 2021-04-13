import React from 'react';
import HeadquartersStyles from './HeadquartersStyles';
import { headquartersData } from './HeadquartersData';

import HeadquarterCard from '../headquarterCard/HeadquarterCard';

// whole component 1045 x 366

const Headquarters = () => (
  <HeadquartersStyles>
    <h4>Our headquarters</h4>
    <div className="hq-cards">
      {headquartersData.map((item, i) => (
        <HeadquarterCard item={item} key={i} />
      ))}
    </div>
  </HeadquartersStyles>
);

export default Headquarters;
