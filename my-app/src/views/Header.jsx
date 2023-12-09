import React from 'react';
import imageLogo from '../assets/big_logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img className='logo-img' src={imageLogo} alt='logo du site Kasa' />
      </div>
      <nav className='header-nav'>
        <Link to='/'>Accueil</Link>
        <Link to='/About'>About</Link>
      </nav>
    </div>
  );
}

export default Header;
