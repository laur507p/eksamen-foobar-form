import React from "react";
import { motion } from "framer-motion";

export default function Confirmation(props) {
  return (
    <motion.section
      style={{ position: "absolute" }}
      initial="initial"
      exit="out"
      animate="in"
      variants={props.pageVariants}
      transition={props.pageTransition}
      className="screen"
    >
      <h1>Confirmation</h1>
    </motion.section>
  );
}
