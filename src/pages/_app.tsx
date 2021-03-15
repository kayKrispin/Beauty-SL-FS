import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/global.css';
import { SWRConfig } from 'swr';
import { swrFetcher } from '../api';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <SWRConfig
        value={{
          fetcher: swrFetcher,
          refreshInterval: 0,
          revalidateOnFocus: false,
          shouldRetryOnError: false,
        }}
      >
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
        />
      </SWRConfig>
    </Provider>
  );
}
