import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

// SVG
import { ReactComponent as FeedIcon } from '../../assets/img/feed.svg';
import { ReactComponent as StatisticsIcon } from '../../assets/img/estatisticas.svg';
import { ReactComponent as PostIcon } from '../../assets/img/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../assets/img/sair.svg';

// Context
import { UserContext } from '../../context/UserContext';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  const [mobile, setMobile] = React.useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end activeClassName={styles.active}>
        <FeedIcon />
        {mobile && 'My Photos'}
      </NavLink>
      <NavLink to="/account/statistics" activeClassName={styles.active}>
        <StatisticsIcon />
        {mobile && 'Statistics'}
      </NavLink>
      <NavLink to="/account/post" activeClassName={styles.active}>
        <PostIcon />
        {mobile && 'Post Photo'}
      </NavLink>
      <button onClick={userLogout}>
        <LogoutIcon />
        {mobile && 'Logout'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
