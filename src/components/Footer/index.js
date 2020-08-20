import React from 'react';

import styles from './styles.module.css';

// Icons
import { ReactComponent as Dogs } from '../../assets/img/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Some rights reserved &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
