import React from 'react';
import HowItWorksStyles from './HowItWorksStyles';
import { HowItWorksData } from './HowItWorksData';
import HowItWorksCard from '../howItWorksCard/HowItWorksCard';

const HowItWorks = () => (
  <HowItWorksStyles>
    <h4>How it works</h4>

    <div className="cards-container">
      {HowItWorksData.map((item, i) => (
        <HowItWorksCard item={item} i={i} key={i} />
      ))}
    </div>

    <button type="button">Create your plan</button>
  </HowItWorksStyles>
);

export default HowItWorks;
