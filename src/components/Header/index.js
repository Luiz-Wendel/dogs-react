import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

// Images
import { ReactComponent as Dogs } from '../../assets/img/dogs.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Signup
        </Link>
      </nav>
    </header>
  );
};

export default Header;
