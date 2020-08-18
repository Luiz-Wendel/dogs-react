import React from 'react';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';

// Custom Hooks
import useForm from '../../../hooks/useForm';

// Context
import { UserContext } from '../../../context/UserContext';

const SingIn = () => {
  const { userLogin, loading, error } = React.useContext(UserContext);
  const { validate: usernameValidate, ...username } = useForm();
  const { validate: passwordValidate, ...password } = useForm();

  async function handleSignIn(event) {
    event.preventDefault();

    if (usernameValidate() && passwordValidate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animateLeft">
      <h1 className="title">SignIn</h1>
      <form onSubmit={handleSignIn}>
        <Input name="username" label="Username" {...username} />
        <Input name="password" label="Password" type="password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>SignIn</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default SingIn;
