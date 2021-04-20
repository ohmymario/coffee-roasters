import React from 'react';
import HowItWorksStyles from './HowItWorksStyles';
import { HowItWorksData } from './HowItWorksData';
import HowItWorksCard from '../howItWorksCard/HowItWorksCard';

const HowItWorks = props => {
  const { primary = true } = props;
  return (
    <HowItWorksStyles primary={primary}>
      {primary ? <h4>How it works</h4> : ''}

      <div className="cards-container">
        {HowItWorksData.map((item, i) => (
          <HowItWorksCard primary={primary} item={item} i={i} key={i} />
        ))}
      </div>

      {primary ? (
        <button className="button" type="button">
          Create your plan
        </button>
      ) : (
        ''
      )}
    </HowItWorksStyles>
  );
};

export default HowItWorks;
