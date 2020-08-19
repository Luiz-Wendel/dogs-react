import React from 'react';

import styles from './styles.module.css';

// API
import { PHOTO_GET } from '../../api';

// Custom Hooks
import useFetch from './../../hooks/useFetch';

// Components
import Error from '../Error';
import Loading from '../Loading';
import PhotoContent from '../PhotoContent';

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
