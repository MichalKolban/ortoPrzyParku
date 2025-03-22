import { Navigation } from "../../Navigation/MainNavigation/MainNavigation";
import { Footer } from "../../Footer/Footer";
import { MySign } from "../../MySign/MySign";

import styles from "./CustomLayout.module.css";

export default function CustomLayout({ children }) {
  return (
    <>
      <Navigation />
      <main className={styles.mainWrapper}>{children}</main>
      <Footer />
      <MySign />
    </>
  );
}
