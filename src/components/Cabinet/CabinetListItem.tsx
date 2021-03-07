import React from 'react';
import styles from '@/components/Cabinet/Cabinet.module.scss';

type Props = {
  id: number;
  time: string;
  date: string;
  service: string;
};

export default function CabinetListItem({ service, date, time }: Props) {
  return (
    <div className={styles.cabinetServiceContainerItem}>
      <span>{time}</span>
      <span>{date}</span>
      <span>{JSON.parse(service).label}</span>
    </div>
  );
}
