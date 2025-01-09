import styles from "./PhotosLinkRow.module.css";

import aparatNakladkowyImg from "../../../../public/photos/aparatNakladkowy.png";
import praceKtoreWykonujemyImg from "../../../../public/photos/praceKtoreWykonujemy.png";
import zespolImg from "../../../../public/photos/zespol.png";
import kontaktImg from "../../../../public/photos/kontakt.png";

import { PhotoLink } from "../PhotoLink/PhotoLink";

export const PhotosLinkRow = () => {
  return (
    <>
      <div className={styles.titlePhotoLinkRow}>Przydatne Linki</div>
      <div className={styles.wrapper}>
        <PhotoLink
          href={"/ortodoncja"}
          mainPhoto={aparatNakladkowyImg}
          altName={"abc"}
        >
          Aparaty Nakładkowe
        </PhotoLink>
        <PhotoLink
          href={"/"}
          mainPhoto={praceKtoreWykonujemyImg}
          altName={"abc"}
        >
          <div>Prace które wykonujemy</div>
        </PhotoLink>
        <PhotoLink href={"/"} mainPhoto={zespolImg} altName={"abc"}>
          Zespół
        </PhotoLink>
        <PhotoLink href={"/"} mainPhoto={kontaktImg} altName={"abc"}>
          Kontakt
        </PhotoLink>
      </div>
    </>
  );
};
