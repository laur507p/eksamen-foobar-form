import React, { useState } from "react";
// import AddAndRemove from "../AddAndRemove";
// import GetTotal from "../GetTotal";
import { motion } from "framer-motion";

function BeersList() {
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

  const Beers = [
    {
      id: "1",
      name: "El Hefe",
      description: "The perfect beer",
      price: 65,
    },
    {
      id: "2",
      name: "Ruined Childhood",
      description: "I cry",
      price: 60,
    },
    {
      id: "3",
      name: "Githop",
      description: "Nerd alert",
      price: 65,
    },
    {
      id: "4",
      name: "Mowintime",
      description: "Give me some soul sistah",
      price: 65,
    },
  ];

  const [total, setTotal] = useState(0);

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
      <ul>
        {Beers.map((data) => (
          <li key={data.id}>
            <p>{data.name}</p>
            <p>{data.price}</p>
            <AddAndRemove price={data.price} />
          </li>
        ))}
      </ul>
      <p>{total}</p>
      {/* <GetTotal /> */}
    </motion.section>
  );

  function AddAndRemove(props) {
    const [number, setNumber] = useState(0);

    function subtract() {
      if (number > 0) {
        setNumber(number - 1);
        setTotal(total - props.price);
      }
    }

    function add() {
      setNumber(number + 1);
      setTotal(total + props.price);
    }

    return (
      <div>
        <button onClick={subtract}>-</button>
        {number}
        <button onClick={add}>+</button>
      </div>
    );
  }
}

export default BeersList;
