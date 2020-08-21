import React from 'react';

// API
import { PASSWORD_FORGOTTEN } from '../../../api';

// Custom Hooks
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';

const PasswordForgotten = () => {
  const { validate: validateEmail, ...email } = useForm('email');
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (validateEmail()) {
      const { url, options } = PASSWORD_FORGOTTEN({
        login: email.value,
        url: window.location.href.replace('forgot', 'reset'),
      });

      await request(url, options);
    }
  }

  return (
    <section className="animateLeft">
      <h1 className="title">Forgot your password?</h1>

      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input type="email" label="Email" name="email" {...email} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default PasswordForgotten;
