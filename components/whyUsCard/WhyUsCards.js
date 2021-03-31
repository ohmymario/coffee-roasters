import React from 'react';
import Image from 'next/image';

import WhyUsCardsStyles from './WhyUsCardsStyles';

const WhyUsCards = props => {
  const { data } = props;
  return (
    <WhyUsCardsStyles>
      {data.map((item, i) => (
        <div className="whyus-card" key={i}>
          <div className="whyus-card-icon">
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
            />
          </div>
          <div className="whyus-card-text">
            <h4>{item.title}</h4>
            <p>{item.subtext}</p>
          </div>
        </div>
      ))}
    </WhyUsCardsStyles>
  );
};

export default WhyUsCards;
