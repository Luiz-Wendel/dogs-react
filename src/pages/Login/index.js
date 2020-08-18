import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';

// Context
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <div>
      <h1>Login</h1>
      <Link to="signin">SignIn</Link>
      <Link to="signup">SignUp</Link>
      <Outlet />
    </div>
  );
};

export default Login;
