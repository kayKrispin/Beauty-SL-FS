import React from 'react';
import Calendar from 'react-calendar';
import { Controller, useFormContext } from 'react-hook-form';
import 'react-calendar/dist/Calendar.css';
import styles from './Date.module.scss';

type Props = {
  name: string;
  label?: NonNullable<React.ReactNode>;
  placeholder?: string;
  className?: string;
  textCenter?: boolean;
};

function DatePicker({ name }: Props) {
  const methods = useFormContext();

  const formProps: { [key: string]: any } = {};
  if (methods && name) {
    formProps.ref = methods.register;
    formProps.name = name;
  }

  return (
    <div className={styles.calendar}>
      <Controller
        name={name}
        render={({ value, onChange }) => (
          <Calendar className={styles.calendar} value={value} onChange={(e) => onChange(e)} />
        )}
      />
    </div>
  );
}

export default DatePicker;
