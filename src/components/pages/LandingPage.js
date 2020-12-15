import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Window from "../Window";

export default function LandingPage(props) {
  return (
    <motion.section style={{ position: "absolute" }} initial="initial" exit="out" animate="in" variants={props.pageVariants} transition={props.pageTransition} className="screen">
      <Window />
      <div class="window-container">
        <h1>
          WELCOME
          <br /> TO
          <br />
          FOOBAR
        </h1>
        <Link to="/beers">GET STARTED</Link>
      </div>
    </motion.section>
  );
}
