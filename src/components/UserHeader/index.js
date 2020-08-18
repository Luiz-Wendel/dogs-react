import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './styles.module.css';

//Components
import UserHeaderNav from '../UserHeaderNav';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const { pathname } = useLocation();

  React.useEffect(() => {
    switch (pathname) {
      case '/account/statistics':
        setTitle('Statistics');
        break;
      case '/account/post':
        setTitle('Post Photo');
        break;
      default:
        setTitle('My Account');
        break;
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
