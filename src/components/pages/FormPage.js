import React from "react";
import Form from "../Form";
import { motion } from "framer-motion";

export default function FormPage() {
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
      exit="out"
      animate="in"
      initial="initial"
      variants={pageVariants}
      transition={pageTransition}
      className="screen"
      id="form"
    >
      <a href="#screen4" className="testbutton">
        Next
      </a>

      <Form />
      <button>Submit</button>
    </motion.section>
  );
}
