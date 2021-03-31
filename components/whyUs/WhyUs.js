import React from 'react';
import WhyUsStyles from './WhyUsStyles';
import WhyUsCards from '../whyUsCard/WhyUsCards';
import { WhyUsData } from './WhyUsData';

const WhyUs = () => (
  <WhyUsStyles>
    <div className="whyus-background" />
    <div className="whyus-text">
      <h2>Why choose us?</h2>
      <p>
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
    </div>

    <WhyUsCards data={WhyUsData} />
  </WhyUsStyles>
);

export default WhyUs;
