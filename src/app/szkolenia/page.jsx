import Image from "next/image";
import style from "./szkolenia.module.css";

const SzkoleniaPage = () => {
  return (
    <>
      <head>
        <title>Szkolenia</title>
        <meta
          name="description"
          content="Ortodoncja Przy Parku w Szczecinie – nowoczesna klinika ortodontyczna dla dzieci i dorosłych. Profesjonalne leczenie wad zgryzu, aparaty stałe i ruchome. Umów się na konsultację!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <div className={style.moreInfoSoon}>
        <Image src={"/logo.png"} width={200} height={126} alt="logo" />
        Więcej informacji wkrótce
      </div>
    </>
  );
};

export default SzkoleniaPage;
