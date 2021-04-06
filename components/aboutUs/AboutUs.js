import React from 'react';
import Image from 'next/image';

import AboutUsStyles from './AboutUsStyles';

// whole component 1280 x 450

const AboutUs = () => (
  <AboutUsStyles>
    <Image
      className="hero-image"
      src="/images/hero/image-hero-whitecup.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      alt="White coffee cup with latte art"
    />
    <div className="hero-text">
      <h2>About Us</h2>
      <p>
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </div>
  </AboutUsStyles>
);

export default AboutUs;
