'use client';

import localFont from 'next/font/local';
import './globals.css';
import { useState, useEffect } from 'react';

import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { Montserrat } from 'next/font/google';
import { MySign } from './components/MySign/MySign';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
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
    <html lang="pl">
      <body className={montserrat.variable}>
        <Navigation />
        <main className={'mainWrapper'}>{children}</main>
        <Footer />
        <MySign />
      </body>
    </html>
  );
}
