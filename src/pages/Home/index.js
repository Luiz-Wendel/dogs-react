import React from 'react';

// Pages
import Feed from '../Feed';

// Components
import Head from '../../components/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Photos" description="Homepage of Dogs, with photo feed." />
      <Feed />
    </section>
  );
};

export default Home;
