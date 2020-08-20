import React from 'react';

import styles from './styles.module.css';

// Components
import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../Error';
import Loading from '../Loading';

// Custom Hooks
import useFetch from './../../hooks/useFetch';
import { PHOTOS_GET } from './../../api';

const FeedPhotos = ({ user, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 3, user });
      await request(url, options);
    }

    fetchPhotos();
  }, [user, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animateLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
