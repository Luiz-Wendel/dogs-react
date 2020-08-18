import React from 'react';

// API
import { USER_POST } from '../../../api';

// Context
import { UserContext } from '../../../context/UserContext';

// Custom Hooks
import useForm from '../../../hooks/useForm';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const SignUp = () => {
  const { userLogin } = React.useContext(UserContext);

  const { validate: usernameValidate, ...username } = useForm();
  const { validate: emailValidate, ...email } = useForm('email');
  const { validate: passwordValidate, ...password } = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animateLeft">
      <h1 className="title">SignUp</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Username" name="username" {...username} />
        <Input label="Email" name="email" type="email" {...email} />
        <Input label="Password" name="password" type="password" {...password} />
        <Button>SignUp</Button>
      </form>
    </section>
  );
};

export default SignUp;
