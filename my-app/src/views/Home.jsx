import React from 'react';
import Cards from './Cards';
import { dataHouses } from '../housesData';
import '../styles/Home.css';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../views/Banner';
import backgroundImageBanner from '../assets/background_home.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <main className='main'>
      <Banner
        image={backgroundImageBanner}
        text={'Chez vous, partout et ailleurs'}
      />
      <div className='card-gallery'>
        {dataHouses.map((house) => {
          // Vérifiez si l'ID de la maison est valide
          if (house.id) {
            return (
              <Link to={`/Houses/${house.id}`} key={house.id}>
                <Cards
                  key={house.id}
                  picture={house.cover}
                  title={house.title}
                />
              </Link>
            );
          } else {
            // Redirigez vers la page d'erreur si l'ID est incorrect
            navigate('/error');
            return null;
          }
        })}
      </div>
    </main>
  );
}

export default Home;
