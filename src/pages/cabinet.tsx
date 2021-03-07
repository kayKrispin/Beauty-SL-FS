import React, { useEffect } from 'react';

import Cabinet from '@/components/Cabinet/Cabinet';

import { useRouter } from 'next/router';

import GeneralLayout from '@/shared/Layouts/GeneralLayout';
import { useSession, getSession } from 'next-auth/client';
import { NextPageContext } from 'next';

export default function CabinetPage() {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push(`/`);
    }
  }, []);

  if (!session) return null;

  return (
    <GeneralLayout>
      <Cabinet />
    </GeneralLayout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
