"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./GalleryLightbox.module.css";

export const GalleryLightbox = ({
  photos,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  // Caption/counter must switch at the exact moment the new photo is ready to
  // paint — not the moment React re-renders — otherwise the text jumps ahead
  // of a still-loading image. We preload off-DOM and only flip once decoded.
  const [shownIndex, setShownIndex] = useState(activeIndex);
  const requestedIndexRef = useRef(activeIndex);

  useEffect(() => {
    requestedIndexRef.current = activeIndex;
    const targetSrc = photos[activeIndex].photo;

    const applyIfStillRequested = () => {
      if (requestedIndexRef.current === activeIndex) {
        setShownIndex(activeIndex);
      }
    };

    const preloadImg = new window.Image();
    preloadImg.src = targetSrc;
    if (preloadImg.complete) {
      applyIfStillRequested();
    } else {
      preloadImg.onload = applyIfStillRequested;
      preloadImg.onerror = applyIfStillRequested;
    }
  }, [activeIndex, photos]);

  const active = photos[shownIndex];

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.classList.add("no-scroll");
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("no-scroll");
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button
        type="button"
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Zamknij"
      >
        ✕
      </button>

      <button
        type="button"
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Poprzednie zdjęcie"
      >
        ‹
      </button>

      <div className={styles.contentBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageWrapper}>
          <Image
            src={active.photo}
            width={1600}
            height={1200}
            unoptimized
            className={styles.image}
            alt={active.name}
            priority
          />
        </div>
        <div className={styles.captionBox}>
          <div className={styles.caption}>{active.name}</div>
          <div className={styles.counter}>
            {shownIndex + 1} / {photos.length}
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Następne zdjęcie"
      >
        ›
      </button>
    </div>
  );
};
