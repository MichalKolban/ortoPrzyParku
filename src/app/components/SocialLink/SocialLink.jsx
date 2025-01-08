import Link from "next/link";
import styles from "./SocialLink.module.css";

export default function SocialLinks({ socialHref, children }) {
  return (
    <Link className={styles.singleLink} href={socialHref} target="_blank">
      {children}
    </Link>
  );
}
