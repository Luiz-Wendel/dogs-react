import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import SingIn from './pages/Login/SingIn';
import SignUp from './pages/Login/SignUp';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} end />
      <Route path="login/*" element={<Login />}>
        <Route path="signin" element={<SingIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
