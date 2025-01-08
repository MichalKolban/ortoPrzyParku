"use client";

import "./globals.css";

import Head from "next/head";

import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { Montserrat } from "next/font/google";
import { MySign } from "./components/MySign/MySign";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <Head>
        <title>My App</title>
        <meta name="description" content="This is my amazing app!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={montserrat.variable}>
        <Navigation />
        <main className={"mainWrapper"}>{children}</main>
        <Footer />
        <MySign />
      </body>
    </html>
  );
}
