'use client';

import { useState, useEffect } from 'react';

const OfertaPage = () => {
  const [deviceType, setDeviceType] = useState('desktop');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('page hello 1 oferta ');
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <main></main>
    </div>
  );
};

export default OfertaPage;
