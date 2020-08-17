import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
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
