import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

// Context
import { UserContext } from '../../context/UserContext';

// Images
import { ReactComponent as Dogs } from '../../assets/img/dogs.svg';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/">
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link className={styles.login} to="/account">
              {data.nome}
            </Link>
            <button onClick={userLogout}>Logout</button>
          </>
        ) : (
          <Link className={styles.login} to="/login/signin">
            Login / Signup
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
