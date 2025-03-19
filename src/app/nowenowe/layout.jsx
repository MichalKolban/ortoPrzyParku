"use client";

// import "./globals.css";

import { usePathname } from "next/navigation";

// import { Footer } from "./components/Footer/Footer";
// import { NavigationSchooling } from "./components/NavigationSchooling/NavigationSchooling";
// import { Montserrat } from "next/font/google";
// import { MySign } from "./components/MySign/MySign";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NavigationSchooling } from "../../components/NavigationSchooling/NavigationSchooling";

import { useState } from "react";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600"],
//   variable: "--font-montserrat",
// });

// export const metadata = {
//   title: "My App",
//   description: "A fully responsive application",
//   viewport: "width=device-width, initial-scale=1",
// };

export default function CostomLayout({ children }) {
  // const [title, setTitle] = useState("Strona Główna");
  const pathName = usePathname();

  return (
    <html lang="pl">
      <Analytics />
      <SpeedInsights />
      <head>
        <title>
          Ortodoncja Przy Parku w Szczecinie - Ortodoncja Szczecin |
          Stomatologia Szczecin
        </title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Ortodoncja Przy Parku w Szczecinie – klinika ortodontyczna dla dzieci i dorosłych. Profesjonalne leczenie wad zgryzu, aparaty stałe i ruchome"
        />
        <meta
          name="keywords"
          content="ortodonta, szczecin, ortodoncja, stomatologia, bonding, bez usuwania, ortodonta dzieciecy, invisalig, dentysta, stomatolog, klinika stomatologiczna, stomatologia, metamorfozy uśmiechu, protezy na implantach"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.ortodoncjaprzyparku.pl" />
      </head>
      <body>
        <NavigationSchooling />
        <main className={"mainWrapper"}>{children}</main>
        {/* <Footer /> */}
        {/* <MySign /> */}
      </body>
    </html>
  );
}
