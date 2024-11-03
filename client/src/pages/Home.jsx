import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import About from './About';
import Services from './Services';
import Services2 from './Services2';
import Contact from './Contact';
import Footer from '../components/Footer';
import Reviews from './Reviews';
import Careers from './Careers';
import Media from './Media';

const Home = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar />
      <Carousel />
      <Services />
      <About />
      <Services2 />
      <Careers />
      <Media />
      <Reviews />
      <Contact />
      <Footer />

      {showTopButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primary text-white animate-bounce p-3 rounded-full shadow-lg transition-all hover:bg-secondary"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Home;
