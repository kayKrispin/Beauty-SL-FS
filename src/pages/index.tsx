import Head from 'next/head';
import { SWRConfig } from 'swr';
import { swrFetcher } from '@/api';
import { useRouter } from 'next/router';

import {
  providers,
  useSession,
  SessionProvider,
  getSession,
} from 'next-auth/client';
import React, { useEffect } from 'react';
import AuthLayout from '@/shared/Layouts/AuthLayout';
import { NextPageContext } from 'next';
import Home from '../components/Home/Home';

type Props = {
  providers: SessionProvider;
};

// eslint-disable-next-line no-shadow
export default function Main(props: Props) {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push(`/cabinet`);
    }
  }, []);

  if (session) return null;

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
          <title>Beauty Salon</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AuthLayout>
          <Home {...props} />
        </AuthLayout>
      </SWRConfig>
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      session: await getSession(context),
      providers: await providers(),
    },
  };
}
