import React from 'react';

import styles from './styles.module.css';

const Input = ({ name, label, ...options }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type="text"
        {...options}
      />
      <p className={styles.error}>* Error</p>
    </div>
  );
};

export default Input;
