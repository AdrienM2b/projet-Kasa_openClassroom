import React from 'react';
import '../styles/Cards.css';

export default function cards({ picture, title }) {
  return (
    <div
      className='cards'
      style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
      }}
    >
      <p>{title}</p>
    </div>
  );
}
