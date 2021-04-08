import React from 'react';
import Head from 'next/head';

import AboutUs from '../components/aboutUs/AboutUs';
import AboutMessageContainer from '../components/aboutMessageContainer/AboutMessageContainer';

const about = props => (
  <>
    <Head>
      <title>coffeeroasters</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <AboutUs />
      <AboutMessageContainer />
    </main>
  </>
);

export default about;
