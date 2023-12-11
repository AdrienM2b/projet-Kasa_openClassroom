import React from 'react';
import '../styles/Banner.css';

export default function Banner({ image, text }) {
  const bannerStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className='banner' style={bannerStyle}>
      <p className='banner-text'>{text}</p>
    </div>
  );
}
