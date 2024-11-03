import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['./slide1.avif', './slide2.avif', './slide3.avif'];
  const slideCount = slides.length;

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideCount]);

  // Function to go to a specific slide when a dot is clicked
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className='relative'>
      <div className="carousel-container overflow-hidden w-full">
        {/* Carousel Images */}
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

        {/* Dot Indicators */}

      </div>
      <div className="p-2 flex items-center justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot w-2 h-2 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-gray-400'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
