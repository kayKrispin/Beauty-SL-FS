import React from 'react';
import TimePicker from 'rc-time-picker';
import { Controller, useFormContext } from 'react-hook-form';

import 'rc-time-picker/assets/index.css';
import styles from './TimePicker.module.scss';

type Props = {
  name?: string;
  label?: NonNullable<React.ReactNode>;
  placeholder?: string;
  className?: string;
  textCenter?: boolean;
  disabledHours?: number[];
};

function disabledHoursDefault(additionalHours: number[]) {
  return additionalHours
    ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 19, 20, 21, 22, 23, ...additionalHours]
    : [0, 1, 2, 3, 4, 5, 6, 7, 8, 19, 20, 21, 22, 23];
}

function TimePickerWrapper({ name, label, disabledHours }: Props) {
  const methods = useFormContext();

  const formProps: { [key: string]: any } = {};
  if (methods && name) {
    formProps.ref = methods.register;
    formProps.name = name;
  }

  return (
    <div className={styles.slTimePicker}>
      <label htmlFor={name} className={styles.slLabel}>
        {label}
      </label>
      <Controller
        name={name as string}
        render={({ value, onChange }) => (
          <TimePicker
            disabledHours={() =>
              disabledHoursDefault(disabledHours as number[])
            }
            showSecond={false}
            onChange={onChange}
            value={value}
            showMinute={false}
          />
        )}
      />
    </div>
  );
}

export default TimePickerWrapper;
