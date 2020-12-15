import React from "react";
import { motion } from "framer-motion";
import Window from "../Window";

export default function Confirmation(props) {
  return (
    <motion.section style={{ position: "absolute" }} initial="initial" exit="out" animate="in" variants={props.pageVariants} transition={props.pageTransition} className="screen">
      <Window />
      <div class="window-container">
        <h1>Confirmation</h1>
      </div>
    </motion.section>
  );
}
