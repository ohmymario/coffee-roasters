import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Testing h1</h1>
        <h2>Testing h2</h2>
        <h3>Testing h3</h3>
        <h4>Testing h4</h4>
        <p>Testing Paragraph</p>

        <button type="button" disabled>
          Button
        </button>
        <button type="button">Button</button>
      </main>
    </div>
  );
}
