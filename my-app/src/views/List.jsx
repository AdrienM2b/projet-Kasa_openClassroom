import React, { useState } from 'react';
import '../styles/List.css';

export default function List({ elements, titre }) {
  const [isTextVisible, setTextVisible] = useState(false);

  function handleClickOnList() {
    setTextVisible(!isTextVisible);
  }

  return (
    <div
      className={`list-container ${isTextVisible ? 'open' : 'close'}`}
      onClick={handleClickOnList}
    >
      <div className='list-header'>
        <h3>{titre}</h3>
        <i
          className={`fa-solid fa-angle-up ${isTextVisible ? 'open' : 'close'}`}
        ></i>
      </div>
      <div className={`text-list ${isTextVisible ? 'show' : 'hide'}`}>
        {typeof elements === 'string' ? (
          <p className='elements'>{elements}</p>
        ) : (
          <div className='elements'>
            {elements.map((element, index) => (
              <p key={index}>{element}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
