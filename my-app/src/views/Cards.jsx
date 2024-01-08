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
      <span className='gradient-filter'>
        <p>{title}</p>
      </span>
    </div>
  );
}
