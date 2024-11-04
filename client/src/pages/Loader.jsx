import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0); // State to track progress percentage

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Stop the interval at 100%
          return 100;
        }
        return prev + 1; // Increment progress
      });
    }, 50); // Update every 50ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-800 fixed loader-container top-0 left-0 flex items-center justify-center text-white">
      <div id="loader" className="loader text-center">
        <span id="counter" className="text-3xl">{progress} %</span>
        <div id="line" className="mt-4 w-64 h-2 bg-white" style={{ width: `${progress}%` }}>
          
        </div>
      </div>
    </div>
  );
};

export default Loader;
