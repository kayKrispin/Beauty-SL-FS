import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './Cabinet.module.scss';
import CabinetListItem from './CabinetListItem';

type Service = {
  id: number;
  time: string;
  date: string;
  service: string;
  isAccepted: boolean;
  email?: string;
  instagramName?: string;
  phone: string;
};

type Props = {
  services: Service[] | undefined;
  mutate: () => void;
};

export default function CabinetList({ services, mutate }: Props) {
  if (!services) return <CircularProgress />;

  return (
    <div className={styles.cabinetServiceContainer}>
      {services?.map((service: Service) => (
        <CabinetListItem mutate={mutate} key={service.id} {...service} />
      ))}
    </div>
  );
}
