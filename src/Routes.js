import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Login from './pages/Login';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} end />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
