import './styles/App.css';
import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Header from './routes/Header';
import Error from './routes/Error';
import Houses from './routes/Houses';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Houses' element={<Houses />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
