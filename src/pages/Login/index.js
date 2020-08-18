import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';

import styles from './styles.module.css';

// Context
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Outlet />
      </div>
    </section>
  );
};

export default Login;
