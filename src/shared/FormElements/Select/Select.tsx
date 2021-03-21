import React from 'react';
import { Controller } from 'react-hook-form';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

function SelectWrapper({ name, label, options }: Props) {
  return (
    <div className={styles.slSelect}>
      <label className={styles.slLabel} htmlFor="">
        {label}
      </label>

      <Controller
        name={name}
        render={({ onChange, value }) => (
          <Select onChange={onChange} value={value}>
            {options &&
              options.map((option: Option) => (
                <MenuItem key={option.label} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
        )}
      />
    </div>
  );
}

export default SelectWrapper;
