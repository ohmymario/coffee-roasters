import React from 'react';
import Head from 'next/head';
import AboutUs from '../components/aboutUs/AboutUs';
import Commitment from '../components/commitment/Commitment';

const about = props => (
  <>
    <Head>
      <title>coffeeroasters</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <AboutUs />
      <Commitment />
    </main>
  </>
);

export default about;
