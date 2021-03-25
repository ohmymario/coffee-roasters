import React from 'react';
import Image from 'next/image';

import HeroStyles from './HeroStyles';

const Hero = () => (
  <HeroStyles>
    <Image
      className="hero-image"
      src="/images/hero/image-hero-coffeepress.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      alt="coffee-press"
    />
    <div className="hero-text">
      {/* 493 */}
      <h1>Great coffee made simple.</h1>
      {/* 445 */}
      <p>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <button type="button">Create your plan</button>
    </div>
  </HeroStyles>
);

export default Hero;
