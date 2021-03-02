import React from 'react';

import styles from './Select.module.scss';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label?: NonNullable<React.ReactNode>;
  placeholder?: string;
  className?: string;
};

function Select({ name, label }: Props) {
  const methods = useFormContext();

  return (
    <div className={styles.slSelect}>
      <label className={styles.slLabel} htmlFor="">
        {label}
      </label>
      <select
        ref={methods.register}
        className={styles.slMainSelect}
        name={name}
      >
        <option value="вії">вії</option>
        <option value="щоки">щоки</option>
        <option value="брови">брови</option>
      </select>
    </div>
  );
}

export default Select;
