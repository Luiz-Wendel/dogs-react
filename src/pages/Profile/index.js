import React from 'react';
import { useParams } from 'react-router-dom';

// Pages
import Feed from '../Feed';

const Profile = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default Profile;
