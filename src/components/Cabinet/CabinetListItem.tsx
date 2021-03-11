import React from 'react';
import { useSession } from 'next-auth/client';
import { toast } from 'react-toastify';
import Button from '../../shared/Button/Button';
import serviceApi from '../../api/serviceApi';
import styles from './Cabinet.module.scss';

type Props = {
  id?: number;
  time?: string;
  date?: string;
  service: string;
  isAccepted?: boolean;
  email?: string;
  instagramName?: string;
  mutate?: () => void;
  phone?: string;
};

export default function CabinetListItem({
  service,
  date,
  time,
  isAccepted,
  id,
  email,
  instagramName,
  mutate,
  phone,
}: Props) {
  const [session] = useSession();

  const handleDelete = (serviceId: number) => {
    serviceApi.delete(serviceId).then(() => {
      toast.success(`ви успішно відмінили запис подлец`);
      // eslint-disable-next-line no-unused-expressions
      mutate && mutate();
    });
  };

  return (
    <div className={styles.cabinetServiceContainerItem}>
      {session?.user.email === `tarasbashunryn@gmail.com` && (
        <>
          <span>{email}</span>
          <span>{instagramName}</span>
        </>
      )}
      <span>{time}</span>
      <span>{phone}</span>
      <span>{date}</span>
      <span>{JSON.parse(service)?.label}</span>
      <span>{`${!isAccepted ? `❌` : `✅`}`}</span>
      <span>
        <Button
          onClick={() => handleDelete(id as number)}
          className={styles.cabinetRemoveBtn}
          label="відмінити запис"
        />
      </span>
    </div>
  );
}
