import React from 'react';
import { useNavigate } from 'react-router-dom';

// API
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();

  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);
    const result = await response.json();

    setData(result);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const { token } = await response.json();

      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate]
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);

          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Invalid token!');

          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }

    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
