import React from 'react';

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
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>SignIn</button>
      </form>
    </>
  );
};

export default SingIn;
