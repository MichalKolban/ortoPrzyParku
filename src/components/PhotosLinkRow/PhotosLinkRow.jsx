import styles from "./PhotosLinkRow.module.css";

// import aparatNakladkowyImg from "../../../../public/photos/aparatNakladkowy.png";
// import praceKtoreWykonujemyImg from "../../../../public/photos/praceKtoreWykonujemy.png";
// import zespolImg from "../../../../public/photos/zespol.png";
// import kontaktImg from "../../../../public/photos/kontakt.png";

import { PhotoLink } from "../PhotoLink/PhotoLink";

export const PhotosLinkRow = () => {
  const aparatNakladkowyImg = "/photos/aparatNakladkowy.png";
  const praceKtoreWykonujemyImg = "/photos/praceKtoreWykonujemy.png";
  const zespolImg = "/photos/zespol.png";
  const kontaktImg = "/photos/kontakt.png";

  return (
    <>
      <div className={styles.titlePhotoLinkRow}>Przydatne Linki</div>
      <div className={styles.wrapper}>
        <PhotoLink
          href={"/ortodoncja"}
          mainPhoto={aparatNakladkowyImg}
          altName={"ortodoncja"}
        >
          Aparaty Nakładkowe
        </PhotoLink>
        <PhotoLink
          href={"/pracownia#bracesGallery"}
          mainPhoto={praceKtoreWykonujemyImg}
          altName={"pracownia"}
        >
          <div>Prace które wykonujemy</div>
        </PhotoLink>
        <PhotoLink
          href={"/zespol"}
          mainPhoto={zespolImg}
          altName={"prace ktore wykonujemy"}
        >
          Zespół
        </PhotoLink>
        <PhotoLink href={"/kontakt"} mainPhoto={kontaktImg} altName={"kontakt"}>
          Kontakt
        </PhotoLink>
      </div>
    </>
  );
};
