import React from 'react';
import imageLogo from '../assets/big_logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='h-36 flex justify-around items-center'>
      <div className='h-17 w-1/3'>
        <img className='cover' src={imageLogo} alt='logo du site Kasa' />
      </div>
      <nav className='h-200px w-1/3 flex justify-around items-center'>
        <Link to='/'>Accueil</Link>
        <Link to='/About'>About</Link>
      </nav>
    </div>
  );
}

export default Header;
