import React, { MouseEvent } from 'react';
import { Button } from '@material-ui/core';

import styles from './Button.module.scss';

type Props = {
  label: string;
  type?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

function ButtonWrapper({ label, onClick, className, type }: Props) {
  return (
    <Button
      variant="contained"
      color="primary"
      className={`${styles.slButton} ${
        type === `fb` ? styles.slFbBtn : ``
      } ${className}`}
      onClick={onClick}
      type={type === `submit` ? `submit` : `button`}
    >
      {label}
    </Button>
  );
}

export default ButtonWrapper;
