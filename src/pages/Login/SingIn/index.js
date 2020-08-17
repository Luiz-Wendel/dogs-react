import React from 'react';

// API
import { TOKEN_POST, USER_GET } from '../../../api';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

// Custom Hooks
import useForm from '../../../hooks/useForm';

const SingIn = () => {
  const { validate: usernameValidate, ...username } = useForm();
  const { validate: passwordValidate, ...password } = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) getUser(token);
  }, []);

  async function handleSignIn(event) {
    event.preventDefault();

    if (usernameValidate() && passwordValidate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const { token } = await response.json();

      window.localStorage.setItem('token', token);
      getUser(token);
    }
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
  }

  return (
    <>
      <h1>SignIn</h1>
      <form onSubmit={handleSignIn}>
        <Input name="username" label="Username" {...username} />
        <Input name="password" label="Password" type="password" {...password} />
        <Button>SignIn</Button>
      </form>
    </>
  );
};

export default SingIn;
