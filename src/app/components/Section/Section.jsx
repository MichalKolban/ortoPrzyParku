import styles from "./Section.module.css";

export const Section = ({ backgroundClass, children }) => {
  let stylesClass =
    backgroundClass == "gray" ? styles.backgroundGray : styles.backgroundWhite;

  console.log("backgroundClass", stylesClass);
  return <div className={stylesClass}>{children}</div>;
};
