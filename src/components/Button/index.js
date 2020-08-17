import React from 'react';

import styles from './styles.module.css';

const Button = ({ children, ...options }) => {
  return (
    <button {...options} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
