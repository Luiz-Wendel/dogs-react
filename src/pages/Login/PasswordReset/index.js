import React from 'react';
import { useNavigate } from 'react-router-dom';

// API
import { PASSWORD_RESET } from '../../../api';

// Custom Hooks
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';

const PasswordReset = () => {
  const { validate: passwordValidate, ...password } = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  const [key, setKey] = React.useState('');
  const [login, setLogin] = React.useState('');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordValidate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);

      if (response.ok) navigate('/login/signin');
    }
  }

  return (
    <section className="animateLeft">
      <h1 className="title">Password reset</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          label="New password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Reseting...</Button>
        ) : (
          <Button>Reset</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default PasswordReset;
