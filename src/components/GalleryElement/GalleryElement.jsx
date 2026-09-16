import Image from "next/image";
import styles from "./GalleryElement.module.css";

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
    <line x1="15.4" y1="15.4" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="10.5" y1="7.5" x2="10.5" y2="13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="7.5" y1="10.5" x2="13.5" y2="10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const GalleryElement = ({
  imgSrc,
  name,
  onClick,
  captionPosition = "overlay",
}) => {
  const isLong = name.length > 45;
  const isVeryLong = name.length > 65;

  if (captionPosition === "below" || captionPosition === "below-blue") {
    const base =
      captionPosition === "below-blue"
        ? styles.captionBelowBlue
        : styles.captionBelow;
    const longMod =
      captionPosition === "below-blue"
        ? styles.captionBelowBlueLong
        : styles.captionBelowLong;
    const veryLongMod =
      captionPosition === "below-blue"
        ? styles.captionBelowBlueVeryLong
        : styles.captionBelowVeryLong;

    const captionBelowClass = isVeryLong
      ? `${base} ${veryLongMod}`
      : isLong
        ? `${base} ${longMod}`
        : base;

    return (
      <button type="button" className={styles.wrapperBelow} onClick={onClick}>
        <div className={styles.imageBox}>
          <Image
            src={imgSrc}
            width={340}
            height={255}
            alt={name}
            className={styles.image}
          />
          <div className={styles.zoomIcon} aria-hidden="true">
            <ZoomIcon />
          </div>
        </div>
        <div className={captionBelowClass}>{name}</div>
      </button>
    );
  }

  const captionClass = isVeryLong
    ? `${styles.caption} ${styles.captionVeryLong}`
    : isLong
      ? `${styles.caption} ${styles.captionLong}`
      : styles.caption;

  const gradientClass = isLong
    ? `${styles.gradient} ${styles.gradientTall}`
    : styles.gradient;

  return (
    <button type="button" className={styles.wrapper} onClick={onClick}>
      <Image
        src={imgSrc}
        width={340}
        height={255}
        alt={name}
        className={styles.image}
      />
      <div className={gradientClass} />
      <div className={captionClass}>{name}</div>
      <div className={styles.zoomIcon} aria-hidden="true">
        <ZoomIcon />
      </div>
    </button>
  );
};
