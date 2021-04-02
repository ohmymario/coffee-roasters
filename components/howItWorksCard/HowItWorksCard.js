import React from 'react';
import HowItWorksCardStyles from './HowItWorksCardStyles';

const HowItWorksCard = props => {
  const { item, i } = props;
  return (
    <HowItWorksCardStyles>
      <div className="divider">
        <div className="dot" />
      </div>
      <div className="card">
        <h1>{`0${i + 1}`}</h1>
        <h3>{item.title}</h3>
        <p>{item.subtext}</p>
      </div>
    </HowItWorksCardStyles>
  );
};

export default HowItWorksCard;
