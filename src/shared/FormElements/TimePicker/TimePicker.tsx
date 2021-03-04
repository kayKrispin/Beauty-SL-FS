import React from 'react';
import TimePicker from 'rc-time-picker';
import { Controller, useFormContext } from 'react-hook-form';
import moment from 'moment';

import 'rc-time-picker/assets/index.css';
import styles from './TimePicker.module.scss';

type Props = {
  name: string;
  label?: NonNullable<React.ReactNode>;
  placeholder?: string;
  className?: string;
  textCenter?: boolean;
};

function TimePickerWrapper({ name, label }: Props) {
  const methods = useFormContext();

  const formProps: { [key: string]: any } = {};
  if (methods && name) {
    formProps.ref = methods.register;
    formProps.name = name;
  }

  return (
    <div className={styles.slTimePicker}>
      <label className={styles.slLabel}>{label}</label>
      <Controller
        name={name}
        render={({ value, onChange }) => (
          <TimePicker
            showSecond={false}
            onChange={onChange}
            value={value}
          />
        )}
      />
    </div>
  );
}

export default TimePickerWrapper;
