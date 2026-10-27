"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1];

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
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
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
