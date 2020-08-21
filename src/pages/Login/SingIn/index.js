import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import styles from './styles.module.css';
import btnComponentStyles from '../../../components/Button/styles.module.css';

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
      <form className={styles.form} onSubmit={handleSignIn}>
        <Input name="username" label="Username" {...username} />
        <Input name="password" label="Password" type="password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>SignIn</Button>
        )}
        <Error error={error && 'Invalid username or password!'} />
      </form>
      <Link className={styles.forgot} to="/login/forgot">
        Forgot your Password?
      </Link>
      <div className={styles.signup}>
        <h2 className={styles.subtitle}>SignUp</h2>
        <p>Don't have an account? SignUp here!</p>
        <Link className={btnComponentStyles.button} to="/login/signup">
          SignUp
        </Link>
      </div>
    </section>
  );
};

export default SingIn;
