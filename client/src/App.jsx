import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './pages/Loader';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => setIsLoading(false), 5000); // Simulate a 5s load time
    return () => clearTimeout(timer); 
    
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : <Home />}
    </>
  );
};

export default App;
