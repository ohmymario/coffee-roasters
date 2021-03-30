import React from 'react';
import Image from 'next/image';
import WhyUsStyles from './WhyUsStyles';
import { WhyUsData } from './WhyUsData';

// whole component 1280 x 728
// combined 3 cards 1110 x 382
// each card 350 x 382

const WhyUs = () => {
  console.log('Why choose us component');
  return (
    <WhyUsStyles>
      <div className="whyus-text">
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>

      <div className="whyus-cards">
        {WhyUsData.map((item, i) => (
          <div className="whyus-card" key={i}>
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
            />
            <h4>{item.title}</h4>
            <p>{item.subtext}</p>
          </div>
        ))}
      </div>
    </WhyUsStyles>
  );
};

export default WhyUs;
