import React from 'react';
import Cards from './Cards';
import { dataHouses } from '../housesData';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className='main'>
      <div className='card-gallery'>
        {dataHouses.map((houses) => (
          <Link to={`/Houses/${houses.id}`} key={houses.id}>
            <Cards
              key={houses.id}
              picture={houses.cover}
              title={houses.title}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
