import React from "react";
import { motion } from "framer-motion";

export default function Confirmation() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vh",
      scale: 1.2,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "-100vh",
      scale: 0.8,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };
  return (
    <motion.section
      style={{ position: "absolute" }}
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      className="screen"
    >
      <h1>Confirmation</h1>
    </motion.section>
  );
}
