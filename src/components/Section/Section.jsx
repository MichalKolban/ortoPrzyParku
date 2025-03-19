import styles from "./Section.module.css";

export const Section = ({ backgroundClass, reverse, children }) => {
  let stylesClass =
    backgroundClass == "gray" ? styles.backgroundGray : styles.backgroundWhite;

  let reverseCSS = reverse ? styles.reverse : "";

  return <div className={`${stylesClass} ${reverseCSS}`}>{children}</div>;
};
