import React from 'react';

import styles from './styles.module.css';

// Components
import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../Error';
import Loading from '../Loading';

// Custom Hooks
import useFetch from './../../hooks/useFetch';
import { PHOTOS_GET } from './../../api';

const FeedPhotos = ({ page, user, setModalPhoto, setHasNext }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;

      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, result } = await request(url, options);

      if (response && response.ok && result.length < total) setHasNext(false);
    }

    fetchPhotos();
  }, [page, user, request, setHasNext]);

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
