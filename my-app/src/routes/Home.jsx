import React from 'react';
import backGroundImageHome from '../assets/background_home.jpg';
import Cards from './Cards';
import { dataHouses } from '../housesData';
import '../styles/Home.css';

export default function Home() {
  return (
    <main className='main'>
      <div className='banner'>
        <p className='banner-text font-montserrat font-bold text-[130%]'>
          Chez vous, partout et ailleurs
        </p>
      </div>
      <div className='card-gallery w-[90%] rounded-md h-auto bg-[#F6F6F6] flex flex-wrap gap-10 justify-centert'>
        {dataHouses.map((houses) => (
          <Cards key={houses.id} picture={houses.cover} title={houses.title} />
        ))}
      </div>
    </main>
  );
}
