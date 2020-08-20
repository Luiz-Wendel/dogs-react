import React from 'react';

import styles from './styles.module.css';

// API
import { PHOTO_DELETE } from '../../api';

// Custom Hooks
import useFetch from '../../hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Are you sure?');

    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Delete
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Delete
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
