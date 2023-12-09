import React from 'react';

export default function cards({ picture, title }) {
  return (
    <div
      className='w-1/4 h-20 flex justify-center items-center'
      style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
      }}
    >
      <p>{title}</p>
    </div>
  );
}
