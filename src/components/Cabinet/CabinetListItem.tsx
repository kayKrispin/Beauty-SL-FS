import React from 'react';
import styles from '@/components/Cabinet/Cabinet.module.scss';
import { useSession } from 'next-auth/client';
import Button from '@/shared/Button/Button';
import serviceApi from '@/api/serviceApi';
import { toast } from 'react-toastify';

type Props = {
  id: number;
  time: string;
  date: string;
  service: string;
  isAccepted: boolean;
  email?: string;
  instagramName?: string;
  mutate: () => void;
  phone: string;
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
      mutate();
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
          onClick={() => handleDelete(id)}
          className={styles.cabinetRemoveBtn}
          label="відмінити запис"
        />
      </span>
    </div>
  );
}
