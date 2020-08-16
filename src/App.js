import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// css
import './global.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
