import React from 'react';
import { useParams } from 'react-router-dom';

// API
import { PHOTO_GET } from '../../api';

// Custom Hooks
import useFetch from '../../hooks/useFetch';

// Components
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import PhotoContent from '../../components/PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
