import React, { useState } from 'react';
import '../styles/List.css';

export default function List({ elements, titre }) {
  const [isTextVisible, setTextVisible] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  function handleClickOnList() {
    if (initialLoad) {
      setInitialLoad(false);
    }
    setTextVisible(!isTextVisible);
  }

  return (
    <div
      className={`list-container ${
        initialLoad ? '' : isTextVisible ? 'open' : 'close'
      }`}
      onClick={handleClickOnList}
    >
      <div className='list-header'>
        <h3>{titre}</h3>
        <i
          className={`fa-solid fa-angle-up ${
            initialLoad ? '' : isTextVisible ? 'open' : 'close'
          }`}
        ></i>
      </div>
      <div
        className={`text-list ${
          initialLoad ? '' : isTextVisible ? 'show' : 'hide'
        }`}
      >
        {typeof elements === 'string' ? (
          <p className='elements'>{elements}</p>
        ) : (
          <div className='list-of-elements'>
            {elements.map((element, index) => (
              <p key={index}>{element}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
