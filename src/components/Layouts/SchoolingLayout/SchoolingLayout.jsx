import { Navigation } from "../../Navigation/MainNavigation/MainNavigation";
import { Footer } from "../../Footer/Footer";
import { MySign } from "../../MySign/MySign";
import { SchoolingNavigation } from "../../Navigation/SchoolingNavigation/SchoolingNavigation";

export default function SchoolingLayout({ children }) {
  return (
    <>
      <SchoolingNavigation />
      <main className="mainWrapper">{children}</main>
      <MySign />
    </>
  );
}
