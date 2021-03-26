import Head from 'next/head';
import Hero from '../components/hero/Hero';
import Collection from '../components/collection/Collection';
import WhyUs from '../components/whyUs/WhyUs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Collection />
        <WhyUs />
      </main>
    </div>
  );
}
