import React from 'react';
import useSwr from 'swr';

import { useSession } from 'next-auth/client';
import CabinetList from '@/components/Cabinet/CabinetList';

import styles from './Cabinet.module.scss';

export default function Cabinet() {
  const [session] = useSession();

  const { data } = useSwr(`/api/servicesByUser/?email=${session?.user.email}`);

  return (
    <div className={styles.cabinetContainer}>
      <h2 className={styles.cabinetTitle}>Bаші записи</h2>
      <CabinetList services={data} />
    </div>
  );
}
