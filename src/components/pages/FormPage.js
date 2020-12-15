import React from "react";
import Form from "../Form";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Window from "../Window";
import { post } from "../../modules/rest";

export default function FormPage(props) {
  // current order to submit with form!
  const currentCart = localStorage.getItem("currentCart");

  const cartArray = JSON.parse(currentCart);
  console.log("cartArray", cartArray);
  function callFunctions() {
    post(cartArray);
    props.createBox();
  }

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
      <Window />
      <div class="window-container">
        <Form />

        {/* <button>Submit</button> */}
        <Link to="/confirmation" onClick={callFunctions}>
          CONFIRM ORDER
        </Link>
      </div>
    </motion.section>
  );
}
