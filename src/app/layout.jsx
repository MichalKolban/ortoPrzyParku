'use client';

import localFont from 'next/font/local';
import './globals.css';
import { useState, useEffect } from 'react';

import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';

export default function RootLayout({ children }) {
  const [deviceType, setDeviceType] = useState('desktop');
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   console.log('page hello 1');
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const checkWindowSize = () => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        setDeviceType('desktop');
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    }
  };

  useEffect(() => {
    checkWindowSize(); // Pierwsze sprawdzenie po załadowaniu komponentu
    // Nasłuchuj zmian rozmiaru okna
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize); // Usuń nasłuchiwacz przy unmount
    };
  }, []);

  return (
    <html lang="pl">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}