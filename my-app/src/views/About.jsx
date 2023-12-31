import React from 'react';
import List from '../views/List';
import '../styles/About.css';
import Banner from './Banner';
import bannerAbout from '../assets/banner-about.jpg';

export default function About() {
  return (
    <div className='main-container-about'>
      <Banner image={bannerAbout} />
      <div className='about-container'>
        <List
          titre='Fiabilité'
          elements='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        />
        <List
          titre='Respect'
          elements='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <List
          titre='Service'
          elements='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <List
          titre='Sécurité'
          elements={[
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          ]}
        />{' '}
      </div>
    </div>
  );
}
