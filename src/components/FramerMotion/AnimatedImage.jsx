"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import styles from '/Users/michal/projects/github/ortoPrzyParku/src/app/szkoleniadwa/szkolenia.module.css'
import styles from "../../app/szkoleniadwa/szkolenia.module.css";

export default function AnimatedImage() {
  const [isVisible, setIsVisible] = useState(false);
  const doctorImg = "/photos/team/KatarzynaZaleskaSzkolenie.png";

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("image");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Sprawdzenie na wypadek, gdy element już jest w widoku

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.img
      id="image"
      src={doctorImg}
      alt="Example"
      initial={{
        opacity: 0,
        x: 120,
        scale: 0.9,
        rotateZ: 5,
        filter: "blur(10px)",
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              x: 0,
              scale: 1,
              rotateZ: 0,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 2.0, // Animacja trwa dłużej
        ease: "easeInOut",
        type: "spring",
        stiffness: 50, // Wolniejsza reakcja sprężyny
        damping: 15, // Dłuższe wyhamowywanie
      }}
      className={styles.imageWrapperDoctorAnimation}
    />
  );
}
