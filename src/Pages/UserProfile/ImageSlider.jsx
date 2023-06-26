import React from 'react';
import { useState, useEffect, useRef } from 'react';


const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      slideToNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  const slideToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.scrollTo({
        left: currentSlide * sliderElement.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentSlide]);

  return (
    <div className="post-slider-container">
      <div className="display-post-content" ref={sliderRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${image}/${index + 1}`}
            style={{
              transform: `translateX(${currentSlide === index ? '0' : '100%'})`,
              width: "100px",
            }}

          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
