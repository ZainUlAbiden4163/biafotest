"use client";
import React from "react";
import { useScroll, motion } from "framer-motion";
const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="top-0 left-0 z-100 fixed bg-(--color-cyan) w-full h-1.5 origin-left"
    >
      {" "}
    </motion.div>
  );
};

export default ProgressBar;
