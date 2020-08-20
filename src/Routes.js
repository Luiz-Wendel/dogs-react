import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Helpers
import ProtectedRoute from './helpers/ProtectedRoute';

// Context
import { UserContext } from './context/UserContext';

// Pages
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import SingIn from './pages/Login/SingIn';
import SignUp from './pages/Login/SignUp';
import PasswordForgotten from './pages/Login/PasswordForgotten';
import PasswordReset from './pages/Login/PasswordReset';
import User from './pages/User';
import Statistics from './pages/User/Statistics';
import PhotoPost from './pages/User/PhotoPost';
import Feed from './pages/Feed';
import Photo from './pages/Photo';
import Profile from './pages/Profile';

export default () => {
  const { data } = React.useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} end />
      <Route path="login" element={<Login />}>
        <Route path="signin" element={<SingIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot" element={<PasswordForgotten />} />
        <Route path="reset" element={<PasswordReset />} />
      </Route>
      <ProtectedRoute path="account" element={<User />}>
        <Route path="/" element={<Feed user={data && data.id} />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="post" element={<PhotoPost />} />
      </ProtectedRoute>
      <Route path="photo/:id" element={<Photo />} />
      <Route path="profile/:user" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
