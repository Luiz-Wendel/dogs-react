import React from 'react';

const validations = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Invalid email format!',
  },
};

const useForm = (validation) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (validation === false) return true;
    if (value.length === 0) {
      setError("Field can't be empty!");
      return false;
    } else if (
      validations[validation] &&
      !validations[validation].regex.test(value)
    ) {
      console.log('teste');
      setError(validations[validation].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;