"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { Modal } from "../Modal/Modal";

import styles from "./DoctorBadgeMain.module.css";

import dataJSON from "../../data/mainDoctor.json";

export const DoctorBedgeMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const doctor = dataJSON.doctors[0];

  return (
    <>
      <div className={styles.sectionTitle}>Założyciel Gabinetu</div>
      <div className={styles.wrapper}>
        <Image
          src={doctor.photo2}
          width={300} // Maksymalna szerokość obrazu
          height={200} // Dopasowanie proporcji (jeśli obraz jest 300x200)
          style={{
            // width: "100%",
            // maxWidth: "100%", // Zapewnia maksymalną szerokość obrazu na wszystkich ekranach
            height: "auto",
            margin: "0 auto",
          }}
          alt="Katarzyna Zaleska"
        />

        <div className={styles.textWrapper}>
          <h2 className={styles.mainName}>{doctor.name}</h2>
          <h2 className={styles.mainTitle}>Lekarz stomatolog</h2>
          <h2 className={styles.mainTitle}>Specjalista ortodonta</h2>
          <h2 className={styles.mainTitle}>Założyciel gabinetu</h2>
          <button onClick={() => setIsModalOpen(true)} className={styles.btn}>
            więcej informacji
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        photo={doctor.photo2}
        name={doctor.name}
        title={doctor.title}
        description={doctor.description}
      />
    </>
  );
};
