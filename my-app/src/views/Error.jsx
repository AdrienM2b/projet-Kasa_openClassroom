import React from 'react';
import '../styles/Error.css';

export default function Error() {
  return (
    <header>
      <div className='error-container'>
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href='/'>Retourner sur la page d’accueil</a>
      </div>
    </header>
  );
}
