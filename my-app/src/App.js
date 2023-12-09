import './styles/App.css';
import React from 'react';
import Home from './views/Home';
import About from './views/About';
import Header from './views/Header';
import Footer from './views/Footer';
import Error from './views/Error';
import Houses from './views/Houses';
import Banner from './views/Banner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='rootDocument'>
      <Router>
        <Header />
        <Banner />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Houses' element={<Houses />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
