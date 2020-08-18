import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// css
import './global.css';

// Context
import { UserStorage } from './context/UserContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes />
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
