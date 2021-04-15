import React from 'react';
import Head from 'next/head';
import SubscribeHero from '../components/hero/SubscribeHero';
import HowItWorks from '../components/howItWorks/HowItWorks';
import QuestionContainer from '../components/questionContainer/QuestionContainer';

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
        <HowItWorks primary={false} />
        <QuestionContainer />
      </main>
    </>
  );
};

export default subscribe;
