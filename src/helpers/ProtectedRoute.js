import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// context
import { UserContext } from '../context/UserContext';

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Navigate to="/login/signin" />;
  else return null;
};

export default ProtectedRoute;
