import React from 'react';
import Cards from './Cards';
import { dataHouses } from '../housesData';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Banner from '../views/Banner';
import backgroundIlageBanner from '../assets/background_home.jpg';

function Home() {
  return (
    <main className='main'>
      <Banner
        image={backgroundIlageBanner}
        text={'Chez vous, partout et ailleurs'}
      />
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
