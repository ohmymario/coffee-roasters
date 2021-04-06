import React from 'react';
import Head from 'next/head';
import AboutUs from '../components/aboutUs/AboutUs';

const about = props => {
  console.log(props);
  return (
    <>
      <Head>
        <title>coffeeroasters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AboutUs />
      </main>
    </>
  );
};

export default about;
