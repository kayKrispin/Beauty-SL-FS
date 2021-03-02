import React from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './Input.module.scss';

type Props = {
  name: string;
  label?: NonNullable<React.ReactNode>;
  placeholder?: string;
  className?: string;
};

function Input({ name, label, placeholder }: Props) {
  const methods = useFormContext();

  return (
    <div className={styles.slInput}>
      <label className={styles.slInputLabel}>{label}</label>
      <input
        ref={methods.register}
        placeholder={placeholder}
        className={styles.slInputMain}
        name={name}
      />
    </div>
  );
}

export default Input;
