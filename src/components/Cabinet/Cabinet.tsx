import React, { useState } from 'react';
import useSwr from 'swr';

import { useSession } from 'next-auth/client';
import CabinetList from '@/components/Cabinet/CabinetList';

import SignupForm from '@/components/Signup/SignupForm';
import styles from './Cabinet.module.scss';

export default function Cabinet() {
  const [session] = useSession();
  const [isServiceList, setServiceList] = useState(true);

  const handleServiceList = (condition: boolean) => setServiceList(condition);

  const isAdminUrl =
    session?.user.email === `tarasbashurbyn@gmail.com`
      ? `/servicesByAdmin`
      : `/servicesByUser/?email=${session?.user.email}`;

  const { data, mutate } = useSwr(isAdminUrl);

  return (
    <div className={styles.cabinetContainer}>
      <div className={styles.cabinetTitleContainer}>
        <h2
          onClick={() => handleServiceList(true)}
          className={`${styles.cabinetTitle} ${
            isServiceList && styles.cabinetTitleActive
          } `}
        >
          Bаші записи
        </h2>
        <span>/</span>
        <h2
          onClick={() => handleServiceList(false)}
          className={`${styles.cabinetTitle} ${
            !isServiceList && styles.cabinetTitleActive
          } `}
        >
          Kеруванням часом
        </h2>
      </div>
      {isServiceList ? (
        <CabinetList mutate={mutate} services={data} />
      ) : (
        <div className={styles.cabinetForm}>
          <SignupForm
            isAdmin={session?.user.email === `tarasbashurbyn@gmail.com`}
          >
            <div />
          </SignupForm>
        </div>
      )}
    </div>
  );
}
