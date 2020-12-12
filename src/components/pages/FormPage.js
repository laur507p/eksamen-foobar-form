import React from "react";
import Form from "../Form";
import { motion } from "framer-motion";

export default function FormPage(props) {
  // current order to submit with form!
  const currentCart = localStorage.getItem("currentCart");
  const cartArray = JSON.parse(currentCart);
  console.log(cartArray);

  return (
    <motion.section
      style={{ position: "absolute" }}
      exit="out"
      animate="in"
      initial="initial"
      variants={props.pageVariants}
      transition={props.pageTransition}
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
