import React from 'react';

import styles from './styles.module.css';

const Input = ({ name, label, error, ...options }) => {
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
      {error && <p className={styles.error}>* {error}</p>}
    </div>
  );
};

export default Input;
