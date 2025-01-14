import styles from "./DoctorBadge.module.css";

import Image from "next/image";

import { Modal } from "../Modal/Modal";

import { useState } from "react";

export const DoctorBadge = ({ name, icon, photo, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className={styles.wrapper}>
        <Image
          className={styles.icon}
          src={icon}
          width={160}
          height={160}
          alt={name}
        />
        <h2 className={styles.mainName}>{name}</h2>
        <p className={styles.title}>{title}</p>
        <button onClick={() => setIsModalOpen(true)} className={styles.btn}>
          wiecej informacji
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        photo={photo}
        name={name}
        title={title}
        description={description}
      />
    </div>
  );
};
