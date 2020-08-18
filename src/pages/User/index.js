import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import UserHeader from '../../components/UserHeader';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Outlet />
    </section>
  );
};

export default User;
