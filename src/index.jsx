import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Footer from './components/Footer';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
