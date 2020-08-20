import React from 'react';

// Components
import FeedModal from '../../components/FeedModal';
import FeedPhotos from '../../components/FeedPhotos';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
