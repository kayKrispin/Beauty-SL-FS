import * as React from 'react';

import SignupForm from '@/components/Signup/SignupForm';

import styles from './Home.module.scss';

export const Home: React.FC = () => (
  <div className={styles.homeContainer}>
    <h1 className={styles.homeTitle}>Zапишись подлец</h1>
    <SignupForm />
  </div>
);

export default Home;
