import React from 'react';
import Cards from './Cards';
import { dataHouses } from '../housesData';
import '../styles/Home.css';

function Home() {
  return (
    <main className='main'>
      <div className='card-gallery'>
        {dataHouses.map((houses) => (
          <Cards key={houses.id} picture={houses.cover} title={houses.title} />
        ))}
      </div>
    </main>
  );
}

export default Home;
