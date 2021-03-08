import React from 'react';
import CabinetListItem from '@/components/Cabinet/CabinetListItem';

import styles from '@/components/Cabinet/Cabinet.module.scss';

type Service = {
  id: number;
  time: string;
  date: string;
  service: string;
  isAccepted: boolean;
  email?: string;
  instagramName?: string;
};

type Props = {
  services: Service[];
  mutate: () => void;
};

export default function CabinetList({ services, mutate }: Props) {
  if (!services) return <div>Loading...</div>;

  return (
    <div className={styles.cabinetServiceContainer}>
      {services?.map((service: Service) => (
        <CabinetListItem mutate={mutate} key={service.id} {...service} />
      ))}
    </div>
  );
}
