import Head from 'next/head';
import Home from '../components/Home/Home';

export default function Main() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
