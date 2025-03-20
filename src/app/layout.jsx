import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { Navigation } from "@/components/Navigation/Navigation";
import { NavigationSchooling } from "@/components/NavigationSchooling/NavigationSchooling";
import { Montserrat } from "next/font/google";
import { MySign } from "@/components/MySign/MySign";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  console.log("🏠 Renderuje się RootLayout!");
  return (
    <html lang="pl" className={montserrat.variable}>
      <body>
        <Analytics />
        <SpeedInsights />
        <Navigation />
        <main className="mainWrapper">{children}</main>
        <Footer />
        <MySign />
      </body>
    </html>
  );
}
