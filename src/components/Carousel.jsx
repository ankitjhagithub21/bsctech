import React, { useState, useEffect } from 'react';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the active slide
  const slides = ['./slide1.avif', './slide2.avif', './slide3.avif']; // Slide images
  const slideCount = slides.length;

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 5000); // 5-second interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slideCount]);

  return (
    <div className="carousel-container overflow-hidden relative w-full">
      <div
        className="carousel-inner flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item w-full flex-shrink-0" data-aos="fade-up">
            <img src={slide} className="w-full" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
