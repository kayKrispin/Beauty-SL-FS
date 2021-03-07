import React, { MouseEvent } from 'react';
import Button from '@/shared/Button/Button';
import { signOut, useSession } from 'next-auth/client';

import styles from './Header.module.scss';

export default function Header() {
  const [session] = useSession();

  const handleSignout = (e: any) => {
    e.preventDefault();
    signOut();
  };

  return (
    <header className={styles.header}>
      <div>
        <h1>Bітаємо в кабінеті {session?.user.name}</h1>
      </div>
      <div>
        <img
          className={styles.headerImg}
          src={session?.user.image as string}
          alt=""
        />
        <Button
          onClick={(e: MouseEvent) => handleSignout(e)}
          label="Sign Out"
          className={styles.headerLogoutBtn}
        />
      </div>
    </header>
  );
}
