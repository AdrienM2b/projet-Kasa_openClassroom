import React, { useState } from 'react';
import '../styles/Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const previousSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='carousel-container'>
      {images.length < 2 ? (
        ''
      ) : (
        <div className='carousel-controls'>
          <button className='carousel-control-button' onClick={previousSlide}>
            <i className='fa-solid fa-angle-left prevButton'></i>
          </button>
          <button className='carousel-control-button' onClick={nextSlide}>
            <i className='fa-solid fa-angle-right nextButton'></i>
          </button>
        </div>
      )}

      <div className='carousel-slide'>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        {images.length < 2 ? (
          ''
        ) : (
          <p className='nbr-of-images'>
            {currentIndex}/{images.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default Carousel;
