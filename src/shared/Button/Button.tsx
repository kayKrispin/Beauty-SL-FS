import React from 'react';

import styles from './Button.module.scss';

type Props = {
  label: string;
};

function Button({ label }: Props) {
  return (
    <button type="submit" className={styles.slButton}>
      {label}
    </button>
  );
}

export default Button;
