import React from 'react';
import logoFooter from '../assets/logo_footer.png';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <img className='footer-image' src={logoFooter} alt='logo Kasa' />
      <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
