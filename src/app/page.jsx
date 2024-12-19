'use client';

import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { useState, useEffect } from 'react';
import { PhotoLink } from './components/PhotoLink/PhotoLink';
// import { PhotosLinkRow } from './components/PhotosLinkRow/PhotosLinkRow';
import { PhotosLinkRow } from './components/PhotosLinkRow/PhotosLinkRow';
import { OfficeSixIcons } from './components/OfficeSixIcons/OfficeSixIcons';
import { OrtoBanner } from './components/OrtoBanner/OrtoBanner';
import { OrtoServices } from './components/OrtoServices/OrtoServices';

const Home = () => {
  const [deviceType, setDeviceType] = useState('desktop');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('page hello 1');
    setIsMenuOpen(!isMenuOpen);
  };

  // const checkWindowSize = () => {
  //   if (typeof window !== 'undefined') {
  //     const windowWidth = window.innerWidth;
  //     if (windowWidth >= 1024) {
  //       setDeviceType('desktop');
  //     } else if (windowWidth >= 768 && windowWidth < 1024) {
  //       setDeviceType('tablet');
  //     } else {
  //       setDeviceType('mobile');
  //     }
  //   }
  // };

  // useEffect(() => {
  //   checkWindowSize(); // Pierwsze sprawdzenie po załadowaniu komponentu
  //   // Nasłuchuj zmian rozmiaru okna
  //   window.addEventListener('resize', checkWindowSize);
  //   return () => {
  //     window.removeEventListener('resize', checkWindowSize); // Usuń nasłuchiwacz przy unmount
  //   };
  // }, []);

  return (
    <>
      <OrtoServices />
      <OrtoBanner />
      <OfficeSixIcons />
      <PhotosLinkRow />
    </>
  );
};

export default Home;
