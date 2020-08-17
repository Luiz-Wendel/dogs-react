import React from 'react';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

// Custom Hooks
import useForm from '../../../hooks/useForm';

const SingIn = () => {
  const { validate: usernameValidate, ...username } = useForm();
  const { validate: passwordValidate, ...password } = useForm();

  async function handleSignIn(event) {
    event.preventDefault();

    if (usernameValidate() && passwordValidate()) {
      const response = await fetch(
        'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(/* {
          username: username.value,
          password: password.value,
        } */),
        }
      );
      const result = await response.json();

      console.log(result);
    }
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
