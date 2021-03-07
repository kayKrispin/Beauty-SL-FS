import React from 'react';
import CabinetListItem from '@/components/Cabinet/CabinetListItem';

import styles from '@/components/Cabinet/Cabinet.module.scss';

type Service = {
  id: number;
  time: string;
  date: string;
  service: string;
};

type Props = {
  services: Service[];
};

export default function CabinetList({ services }: Props) {
  if (!services) return <div>Loading...</div>;

  return (
    <div className={styles.cabinetServiceContainer}>
      {services?.map((service: Service) => (
        <CabinetListItem key={service.id} {...service} />
      ))}
    </div>
  );
}
