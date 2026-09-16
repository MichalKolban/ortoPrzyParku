"use client";

import { useState } from "react";
import styles from "./Gallery.module.css";

import data from "../../data/gallery.json";
import { GalleryElement } from "../GalleryElement/GalleryElement";
import { GalleryLightbox } from "../GalleryLightbox/GalleryLightbox";
import { Reveal } from "../Reveal/Reveal";

export const Gallery = () => {
  const photos = data.gallery;
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  const handleClose = () => setActiveIndex(null);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % photos.length);

  return (
    <div id="gallery" className={styles.galleryWrapper}>
      <div className={styles.mainTitle}>Galeria Aparatów</div>
      <div className={styles.wrapper}>
        {photos.map((element, index) => {
          return (
            <Reveal
              key={element.id}
              distance={20}
              duration={0.5}
              delay={(index % 3) * 0.06}
            >
              <GalleryElement
                imgSrc={element.photo}
                name={element.name}
                onClick={() => setActiveIndex(index)}
              />
            </Reveal>
          );
        })}
      </div>

      {isOpen && (
        <GalleryLightbox
          photos={photos}
          activeIndex={activeIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};
