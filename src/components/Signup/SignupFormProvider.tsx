import React from 'react';
import { signIn, SessionProvider } from 'next-auth/client';
import Button from '../../shared/Button/Button';
import styles from './SignupForm.module.scss';

type Props = {
  providers: SessionProvider;
};

export default function SignupFormProvider({ providers }: Props) {
  return (
    <div className={styles.formContainerProvider}>
      <h3 className={styles.formContainerProviderTitle}>
        Aбо залогінся в свій кабінет
      </h3>
      {providers &&
        Object?.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <Button
              key={provider.id}
              type="fb"
              label={`Sign in with ${provider.name}`}
              onClick={() => signIn(provider.id)}
            />
          </div>
        ))}
    </div>
  );
}
