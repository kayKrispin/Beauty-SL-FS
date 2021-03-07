import React, { MouseEvent } from 'react';

import styles from './Button.module.scss';

type Props = {
  label: string;
  type?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

function Button({ label, onClick, type, className }: Props) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`${styles.slButton} ${
        type === `fb` ? styles.slFbBtn : ``
      } ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
