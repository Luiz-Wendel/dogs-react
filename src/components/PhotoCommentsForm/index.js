import React from 'react';

import styles from './styles.module.css';

// API
import { COMMENT_POST } from '../../api';

// Icons
import { ReactComponent as Send } from '../../assets/img/enviar.svg';

// Custom Hooks
import useFetch from '../../hooks/useFetch';

// Components
import Error from '../Error';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();

  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, token, { comment });
    const { response, result } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, result]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comment..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
