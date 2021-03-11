import * as React from 'react';

import { SessionProvider } from 'next-auth/client';
import SignupForm from '../Signup/SignupForm';
import SignupFormProvider from '../Signup/SignupFormProvider';

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
