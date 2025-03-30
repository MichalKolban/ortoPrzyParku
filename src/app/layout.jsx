import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { Navigation } from "@/components/Navigation/MainNavigation/MainNavigation";
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
  return (
    <html lang="pl" className={montserrat.variable}>
      <head>
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/5264d6c436a6b181596975cb/script.js"
        ></script>
      </head>
      <body>
        <Analytics />
        <SpeedInsights />
        <main className="mainWrapper">{children}</main>
      </body>
    </html>
  );
}
