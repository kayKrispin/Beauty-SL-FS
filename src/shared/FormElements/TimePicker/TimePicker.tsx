import React from 'react';
import TimePicker from 'rc-time-picker';
import { Controller, useFormContext } from 'react-hook-form';

import 'rc-time-picker/assets/index.css';
import styles from './TimePicker.module.scss';

type Props = {
  name: string;
  label?: NonNullable<React.ReactNode>;
  placeholder?: string;
  className?: string;
  textCenter?: boolean;
  disabledHours?: string[];
  hourMinutesRange?: any;
};

function generateOptions(length: any, excludedOptions: any) {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let value = 0; value < length; value++) {
    if (excludedOptions.indexOf(value) < 0) {
      arr.push(value);
    }
  }
  return arr;
}

function disabledHoursDefault(additionalHours: any) {
  return additionalHours
    ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 19, 20, 21, 22, 23, ...additionalHours]
    : [0, 1, 2, 3, 4, 5, 6, 7, 8, 19, 20, 21, 22, 23];
}

function TimePickerWrapper({
  name,
  label,
  disabledHours,
  hourMinutesRange,
}: Props) {
  const methods = useFormContext();

  const formProps: { [key: string]: any } = {};
  if (methods && name) {
    formProps.ref = methods.register;
    formProps.name = name;
  }

  if (!hourMinutesRange) return null;

  if (!hourMinutesRange[0]) return null;

  function disabledMinutes(h: any) {
    const hourOne = hourMinutesRange[0][0];
    const hourTwo = hourMinutesRange[0][1];

    if (!hourOne) return [];

    switch (h) {
      case hourOne.hour:
        return generateOptions(60, hourOne.minutesRage);
      case hourTwo.hour:
        return generateOptions(60, hourTwo.minutesRage);
      default:
        return generateOptions(60, []);
    }
  }

  const test = disabledMinutes(1);

  console.log(test);

  return (
    <div className={styles.slTimePicker}>
      <label htmlFor={name} className={styles.slLabel}>
        {label}
      </label>
      <Controller
        name={name}
        render={({ value, onChange }) => (
          <TimePicker
            disabledHours={() => disabledHoursDefault(disabledHours)}
            showSecond={false}
            onChange={onChange}
            disabledMinutes={disabledMinutes}
            value={value}
          />
        )}
      />
    </div>
  );
}

export default TimePickerWrapper;
