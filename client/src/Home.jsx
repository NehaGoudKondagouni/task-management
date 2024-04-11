import React, { useEffect, useState } from 'react';
import backgroundImage from './images.jpg'; // Import the image
//import Footer from './Footer';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container" style={{ 
      backgroundImage: `url(${backgroundImage})`,
      position: 'relative',
      height: '100vh', // Adjust the height as needed
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="blur-overlay" style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backdropFilter: `blur(${scrollPosition / 15}px)`,
        transition: 'backdrop-filter 0.3s ease' // Add a smooth transition effect
      }}></div>
    </div>
  );
};

export default Home;

