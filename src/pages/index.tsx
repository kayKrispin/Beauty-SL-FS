import Head from 'next/head';
import { SWRConfig } from 'swr';
import { swrFetcher } from '@/api';
import Home from '../components/Home/Home';

export default function Main() {
  return (
    <div>
      <SWRConfig
        value={{
          fetcher: swrFetcher,
          refreshInterval: 0,
          revalidateOnFocus: false,
          shouldRetryOnError: false,
        }}
      >
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Home />
      </SWRConfig>
    </div>
  );
}
