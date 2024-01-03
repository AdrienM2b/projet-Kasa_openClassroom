import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dataHouses } from '../housesData';
import '../styles/Houses.css';
import List from './List';
import Carousel from './Carousel';

export default function Houses() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [houseData, setHouseData] = useState(null);

  useEffect(() => {
    const foundHouseData = dataHouses.find((house) => house.id === id);
    if (!foundHouseData) {
      // Rediriger vers la page d'erreur si l'ID n'est pas trouvé
      navigate('/error');
    } else {
      setHouseData(foundHouseData);
    }
  }, [id, navigate]);

  if (!houseData) {
    return null;
  }

  return (
    <div className='houses-container'>
      <Carousel images={houseData.pictures} />
      <div className='info-container'>
        <div className='text-container'>
          <h2>{houseData.title}</h2>
          <h3>{houseData.location}</h3>
          <div className='tags-container'>
            {houseData.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className='rate-container'>
          <div className='profil-container'>
            <p>
              {houseData.host.name.split(' ').map((part, index) => (
                <span key={index}>
                  {part}
                  <br />
                </span>
              ))}
            </p>
            <img src={houseData.host.picture} alt='' />
          </div>
          <div className='stars-container'>
            {[...Array(5)].map((_, index) => (
              <span key={index} className='rate'>
                {index < houseData.rating ? (
                  <i className='fa-solid fa-star colored'></i>
                ) : (
                  <i className='fa-solid fa-star not-colored'></i>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='description-equipment_container'>
        <div className='description-equipment'>
          <List elements={houseData.description} titre='Descritpion' />
        </div>
        <div className='description-equipment'>
          <List elements={houseData.equipments} titre='Equipements' />
        </div>
      </div>
    </div>
  );
}
