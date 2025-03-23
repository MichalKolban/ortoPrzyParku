"use client";

import styles from "./CourseTile.module.css";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

export const CourseTile = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.courseTileWrapper}>
      <div className={styles.courseTileImageWrapper}>
        <Image src={data.image} fill className={styles.courseTileImage} />
      </div>
      <div className={styles.shortInfo}>
        <h4 className={styles.title}>{data.title}</h4>
        <p className={styles.mainElement}>
          Termin : <span className={styles.date}>{data.date}</span>
        </p>
        <p className={styles.mainElement}>
          Inwestycja : <span className={styles.date}>{data.price}</span>
        </p>

        {showInfo && (
          <div className={styles.longInfo}>
            {data.description.map((section, index) => (
              <div key={index} className="">
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <ul className={styles.uorderedList}>
                  {section.description.map((item, idx) => (
                    <li key={idx} className={styles.listElement}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <div className={styles.btnBox}>
          <a
            className={styles.aBtn}
            href={`mailto:kasiazal@ortodoncjaprzyparku.pl?subject=Szkolenie%20${data.title}%20${data.date}&body=Proszę o podanie swoich danych oraz numeru telefonu.`}
            target="_blank"
          >
            <button className={styles.btn}>Zapisz się na kurs</button>
          </a>
          <button className={styles.btn} onClick={() => setShowInfo(!showInfo)}>
            {showInfo == true ? "Zwiń" : "Zobacz więcej"}
          </button>
        </div>
        {/* <Link
          className={styles.btn}
          href={data.pdfSource}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pobierz PDF
        </Link> */}
      </div>
    </div>
  );
};
