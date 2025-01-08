// "use client";

import "./globals.css";

import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { Montserrat } from "next/font/google";
import { MySign } from "./components/MySign/MySign";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "My App",
  description: "A fully responsive application",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={montserrat.variable}>
        <Navigation />
        <main className={"mainWrapper"}>{children}</main>
        {/* <Footer /> */}
        <MySign />
      </body>
    </html>
  );
}
