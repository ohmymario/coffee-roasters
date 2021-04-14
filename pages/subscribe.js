import React from 'react';
import Head from 'next/head';
import SubscribeHero from '../components/hero/SubscribeHero';

const subscribe = props => {
  console.log(props);
  return (
    <>
      <Head>
        <title>coffeeroasters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SubscribeHero />

      </main>
    </>
  );
};

export default subscribe;
