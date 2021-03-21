import React from 'react';

import Header from '../Header/Header';

import styles from './Layouts.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function GeneralLayout({ children }: Props) {
  return (
    <div className={styles.auth}>
      <Header />
      {children}
    </div>
  );
}
