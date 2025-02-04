"use client";

import styles from "./CourseTileSingle.module.css";
import { useState } from "react";

export const CourseTileSingle = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.box}>
      <div className={styles.shortInfo}>
        <h4 className={styles.title}>{data.title}</h4>
        <p className={styles.mainElement}>
          Typ kursu :
          <span className={styles.courseType}>{data.courseType}</span>
        </p>
        <p className={styles.mainElement}>
          Prowadzący : <span className={styles.host}>{data.host}</span>
        </p>
        <p className={styles.mainElement}>
          Termin : <span className={styles.date}>{data.date}</span>
        </p>
        <p className={styles.mainElement}>
          Inwestycja : <span className={styles.date}>{data.price}</span>
        </p>
      </div>

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
        <button className={styles.btn}>Zapisz się na kurs</button>
        <button className={styles.btn} onClick={() => setShowInfo(!showInfo)}>
          {showInfo == true ? "Zwiń" : "Zobacz więcej"}
        </button>
      </div>
    </div>
  );
};
