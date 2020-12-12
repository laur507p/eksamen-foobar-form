import React, { useState } from "react";
import AddAndRemove from "../AddAndRemove";
// import Cart from "../Cart";
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
  const tempCart = Beers.map((beer) => {
    return {
      name: beer.name,
      amount: 0,
    };
  });
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(tempCart);

  function addToCart(beer) {
    console.log(beer);
    const nextCart = cart.map((item) => {
      if (item.name === beer) {
        console.log("fandt øl");
        item.amount = item.amount + 1;
      }
      return item;
    });
    console.log(nextCart);
    setCart(nextCart);
  }

  function removeFromCart(beer) {
    console.log(beer);
    const nextCart = cart.map((item) => {
      if (item.name === beer) {
        console.log("minus øl");
        item.amount = item.amount - 1;
      }
      return item;
    });
    console.log(nextCart);
    setCart(nextCart);
  }
  function submitOrder() {
    console.log("submitOrder");
    const nextCart = cart.map((item) => {
      if (item.amount > 0) {
        console.log("filtreret øl", item.name, "x", item.amount);
      }
      return item;
    });
    // console.log(nextCart);
    setCart(nextCart);
    // post(nextCart);
  }

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
            <AddAndRemove
              price={data.price}
              total={total}
              setTotal={setTotal}
              beer={data.name}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <button onClick={submitOrder}>Continue</button>
      <Cart
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        beer={data.name}
      />

      {/* <GetTotal /> */}
    </motion.section>
  );
}

export default BeersList;
