import Image from "next/image";
import companyLogoIcon from "../../../../public/icons/logoSmallIcon.png";

import styles from "./LogoListElement.module.css";

export const LogoListElement = ({ children }) => {
  return (
    <li className={styles.descriptionList}>
      <Image
        className={styles.listIcon}
        src={companyLogoIcon}
        alt="Ortodocnja przy Parku"
        width={12}
        height={12}
      />
      {children}
    </li>
  );
};
