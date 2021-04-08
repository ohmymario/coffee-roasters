/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import Image from 'next/image';
import AboutMessage from '../aboutMessage/AboutMessage';

const AboutMessageContainer = () => (
  <>
    <AboutMessage primary={true} wrapping={false} bg={false}>
      <div className="about-msg-image">
        <Image
          src="/images/image-commitment.jpg"
          height="520"
          width="445"
          layout="fixed"
          alt="barista pouring latte art"
        />
      </div>
      <div className="about-msg-message">
        <h2>Our Commitment</h2>
        <p>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </AboutMessage>

    <AboutMessage primary={false} wrapping={true} bg={true}>
      <div className="about-msg-message">
        <h2>Uncompromising quality</h2>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
      <div className="about-msg-image">
        <Image
          src="/images/image-quality.jpg"
          height="474"
          width="445"
          layout="fixed"
          alt="man holding latte"
        />
      </div>
      <div className="about-msg-background" />
    </AboutMessage>
    <AboutMessage />
  </>
);

export default AboutMessageContainer;
