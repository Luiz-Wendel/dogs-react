import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './styles.module.css';

// SVG
import { ReactComponent as FeedIcon } from '../../assets/img/feed.svg';
import { ReactComponent as StatisticsIcon } from '../../assets/img/estatisticas.svg';
import { ReactComponent as PostIcon } from '../../assets/img/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../assets/img/sair.svg';

// Context
import { UserContext } from '../../context/UserContext';

// Custom Hooks
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');

  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end activeClassName={styles.active}>
          <FeedIcon />
          {mobile && 'My Account'}
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
    </>
  );
};

export default UserHeaderNav;
