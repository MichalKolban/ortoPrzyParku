import { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import Image from "next/image";

export const Modal = ({ isOpen, onClose, photo, name, title, description }) => {
  if (!isOpen) return null;

  // useEffect(() => {
  //   if (onClose) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  // }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        {/* <div className={styles.imageWrapper}> */}
        {/* {photo && <Image src={photo} width={140} height={180} alt={name} />} */}
        {/* {photo && (
            <Image src={photo} layout="fill" objectFit="cover" alt={name} />
          )} */}
        {/* </div> */}

        <div className={styles.photoBox}>
          {photo && (
            <Image
              src={photo}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              alt={name}
            />
          )}
        </div>
        <div className={styles.contentBox}>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
          <button className={styles.btn} onClick={() => onClose(true)}>
            zamknij
          </button>
        </div>
      </div>
    </div>
  );
};
