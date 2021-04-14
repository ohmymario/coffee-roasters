import React from 'react';
import Head from 'next/head';

import AboutHero from '../components/hero/AboutHero';
import AboutMessageContainer from '../components/aboutMessageContainer/AboutMessageContainer';
import Headquarters from '../components/headquarters/Headquarters';

const about = props => (
  <>
    <Head>
      <title>coffeeroasters</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <AboutHero />
      <AboutMessageContainer />
      <Headquarters />
    </main>
  </>
);

export default about;
