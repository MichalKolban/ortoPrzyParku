"use client";

import styles from "./CourseTileSingle.module.css";
import { useState } from "react";

export const CourseTileSingle = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.box}>
      <div className={styles.shortInfo}>
        <h4 className={styles.title}>{data.title}</h4>
        <p className={styles.courseType}>Typ kursu : {data.courseType}</p>
        <p className={styles.host}>Prowadzący : {data.host}</p>
        <p className={styles.date}>Termin : {data.date}</p>
        <p className={styles.courseDuration}>Inwestycja : {data.price}</p>
      </div>

      {showInfo && (
        <div className={styles.longInfo}>
          {data.description.map((section, index) => (
            <div key={index} className="">
              <h2 className="">{section.title}</h2>
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
