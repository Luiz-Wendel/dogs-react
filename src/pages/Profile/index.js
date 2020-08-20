import React from 'react';
import { useParams } from 'react-router-dom';

// Pages
import Feed from '../Feed';

// Components
import Head from '../../components/Head';

const Profile = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <h1 className="title">{user}</h1>
      <Head title={user} />
      <Feed user={user} />
    </section>
  );
};

export default Profile;
