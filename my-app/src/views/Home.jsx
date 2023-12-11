import React from 'react';
import Cards from './Cards';
import { dataHouses } from '../housesData';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Banner from '../views/Banner';

function Home() {
  return (
    <main className='main'>
      <Banner />
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
