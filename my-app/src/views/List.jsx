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
          className={`fa-solid ${
            isTextVisible ? 'fa-angle-down' : 'fa-angle-up'
          }`}
        ></i>
      </div>
      {isTextVisible && (
        <div className='text-list'>
          {typeof elements === 'string' ? (
            <p>{elements}</p>
          ) : (
            elements.map((element, index) => <p key={index}>{element}</p>)
          )}
        </div>
      )}
    </div>
  );
}