import React from 'react';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const SingIn = () => {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  async function handleSignIn(event) {
    event.preventDefault();

    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      }
    );
    const result = await response.json();
    console.log(result);
  }

  return (
    <>
      <h1>SignIn</h1>
      <form onSubmit={handleSignIn}>
        <Input
          name="username"
          label="Username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button>SignIn</Button>
      </form>
    </>
  );
};

export default SingIn;
