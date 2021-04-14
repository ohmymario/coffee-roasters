import React from 'react';
import Image from 'next/image';

import SubscribeHeroStyles from './SubscribeHeroStyles';

const SubscribeHero = () => (
  <SubscribeHeroStyles>
    <Image
      className="hero-image"
      src="/images/hero/image-hero-blackcup.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      alt="closeup of latte"
    />
    <div className="hero-text">
      <h1>Create a plan</h1>
      <p>
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </p>
    </div>
  </SubscribeHeroStyles>
);

export default SubscribeHero;
