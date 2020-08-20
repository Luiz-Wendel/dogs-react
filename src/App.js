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
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes />
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
