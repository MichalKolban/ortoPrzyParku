"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Popup.module.css";

const STORAGE_KEY = "closureNoticeLastShown";
const INTERVAL_MS = 6 * 60 * 60 * 1000;
const FADE_MS = 300;

export const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeTimer = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    let lastShown = 0;
    try {
      lastShown = Number(localStorage.getItem(STORAGE_KEY)) || 0;
    } catch {}

    if (Date.now() - lastShown < INTERVAL_MS) return;

    // Zapis od razu przy wyświetleniu - dzięki temu inne strony/karty
    // nie pokażą popupu przez kolejne 6h.
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}

    setIsOpen(true);
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const handleClose = () => {
    setIsVisible(false);
    closeTimer.current = setTimeout(() => setIsOpen(false), FADE_MS);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.overlay} ${isVisible ? styles.overlayVisible : ""}`}
      onClick={handleClose}
    >
      <div
        className={styles.popup}
        role="dialog"
        aria-modal="true"
        aria-labelledby="closure-notice-title"
        aria-describedby="closure-notice-text"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Zamknij"
        >
          ×
        </button>

        <Image
          className={styles.logo}
          src="/logo.png"
          width={120}
          height={75}
          alt="Ortodoncja przy parku Logo"
        />

        <h2 id="closure-notice-title" className={styles.title}>
          Uwaga!
        </h2>

        <p id="closure-notice-text" className={styles.text}>
          Drodzy Pacjenci, w piątek
        </p>
        <p className={styles.date}>09.10.2026</p>
        <p className={styles.text}>
          nasz Gabinet w Szczecinie oraz Myśliborzu będzie nieczynny. Za
          utrudnienia przepraszamy.
        </p>

        <button className={styles.confirmButton} onClick={handleClose}>
          Zamknij
        </button>
      </div>
    </div>
  );
};
