import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

// API
import { PHOTO_POST } from '../../../api';

// Custom Hooks
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';

const PhotoPost = () => {
  const navigate = useNavigate();

  const { validate: nameValidate, ...name } = useForm();
  const { validate: weightValidate, ...weight } = useForm('number');
  const { validate: ageValidate, ...age } = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animateLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Name" name="name" {...name} />
        <Input label="Weight" name="wieght" type="number" {...weight} />
        <Input label="Age" name="age" type="number" {...age} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? <Button disabled>Posting...</Button> : <Button>Post</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default PhotoPost;
