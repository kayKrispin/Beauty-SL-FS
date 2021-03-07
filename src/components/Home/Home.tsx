import * as React from 'react';

import SignupForm from '@/components/Signup/SignupForm';
import SignupFormProvider from '@/components/Signup/SignupFormProvider';

import { SessionProvider } from 'next-auth/client';
import styles from './Home.module.scss';

type Props = {
  providers: SessionProvider;
};

export const Home = (props: Props) => (
  <div className={styles.homeContainer}>
    <SignupForm>
      <SignupFormProvider {...props} />
    </SignupForm>
  </div>
);

export default Home;
