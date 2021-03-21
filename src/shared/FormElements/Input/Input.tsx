import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import styles from './Input.module.scss';

type Props = {
  name: string;
  label?: NonNullable<React.ReactNode>;
  placeholder?: string;
  className?: string;
};

const CssTextField = withStyles({
  root: {
    color: `red`,
    '& label.Mui-focused': {
      color: `lightblue`,
    },
    '& .MuiInput': {
      color: `white`,
      borderBottomColor: `lightblue`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `lightblue`,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: `red`,
      },
      '&:hover fieldset': {
        borderColor: `yellow`,
      },
      '&.Mui-focused fieldset': {
        borderColor: `green`,
      },
    },
  },
  input: {
    color: `red!important`,
    '& .MuiInput': {
      color: `white`,
      borderBottomColor: `lightblue`,
    },
  },
})(TextField);

function Input({ name, label, placeholder }: Props) {
  return (
    <div className={styles.slInput}>
      <Controller
        name={name}
        render={({ onChange, value }) => (
          <CssTextField
            className={styles.slInputMain}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            color="secondary"
            id={name}
            label={label}
            InputProps={{ className: styles.slInput }}
          />
        )}
      />
    </div>
  );
}

export default Input;
