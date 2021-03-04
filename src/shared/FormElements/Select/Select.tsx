import React from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './Select.module.scss';

type Option = {
  label: string;
  timeToComplete: string;
  id: string;
};

type Props = {
  name: string;
  label?: NonNullable<React.ReactNode>;
  placeholder?: string;
  className?: string;
  options: Option[];
};

function Select({ name, label, options }: Props) {
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
        {options.map((option: Option) => (
          <option key={option.label} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
