import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Window from "../Window";

export default function LandingPage(props) {
  return (
    <motion.section style={{ position: "absolute" }} initial="initial" exit="out" animate="in" variants={props.pageVariants} transition={props.pageTransition} className="screen">
      <Window />
      <Link to="/beers">GET STARTED</Link>
      <h1>Landing page</h1>
    </motion.section>
  );
}
