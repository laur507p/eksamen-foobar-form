import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LandingPage(props) {
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
      <a href="#screen2" className="testbutton">
        Next
      </a>
      <h1>Landing page</h1>
    </motion.section>
  );
}
