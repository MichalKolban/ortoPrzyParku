"use client";

import { motion, useReducedMotion } from "framer-motion";

// Strong ease-out — see .claude/skills/animate. Entrances use ease-out, never ease-in.
const EASE_OUT = [0.23, 1, 0.32, 1];

/**
 * Fades + rises a section into view once, the first time it scrolls into the viewport.
 * Wrap any block-level section/card with it. Re-triggering on every scroll-by is
 * intentionally disabled (viewport once: true) — it should read as content settling
 * into place, not as a slideshow.
 */
export const Reveal = ({
  children,
  as = "div",
  delay = 0,
  distance = 28,
  duration = 0.6,
  className,
  ...rest
}) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const offset = shouldReduceMotion ? 0 : distance;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, transform: `translateY(${offset}px)` }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EASE_OUT,
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};
