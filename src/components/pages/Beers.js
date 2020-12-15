import React, { useState, useEffect } from "react";
import AddAndRemove from "../AddAndRemove";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { get, getHerokuData } from "../../modules/rest";
import Window from "../Window";
import ProgressBar from "../ProgressBar";

function BeersList(props) {
  const [Beers, setBeers] = useState([]);
  const [taps, setTaps] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    get(setBeers);
    getHerokuData(setTaps);
  }, []);

  useEffect(() => {
    const tempCart = taps.map((beer) => {
      return {
        name: beer.beer,
        amount: 0,
      };
    });
    setCart(tempCart);
  }, [taps]);
  // console.log({ cart });
  // console.log("Beers", Beers);
  // console.log("taps", taps);
  let set = new Set();
  function filterAvailableTaps() {
    console.log("filterAvailableTaps");
    if (Beers.length === 0) {
      return [];
    }

    const available = taps.map((tap) => {
      const match = Beers.filter((beer) => beer.name === tap.beer);

      return match[0];
    });

    return available;
  }

  const available = filterAvailableTaps();

  console.log("taps", taps);
  console.log("available", available);

  // const filterAvailable = available.map((tap) => {
  //   set.add(tap.name);
  // });
  // console.log("set", set);
  // console.log("Beers", Beers);

  // console.log("cart", cart);

  // console.log("cart", cart);

  function addToCart(beer) {
    console.log("addToCart");

    // console.log("tempCart ind i addToCart", tempCart);
    const nextCart = cart.map((item) => {
      // console.log("item", item);
      if (item.name === beer) {
        console.log("fandt øl");
        item.amount = item.amount + 1;
        // console.log("item", item);
        // console.log("cart", cart);
      }
      return item;
    });

    setCart(nextCart);
    // console.log("nextCart", nextCart);
  }

  function removeFromCart(beer) {
    console.log("removeFromCart");
    // console.log(beer);

    const nextCart = cart.map((item) => {
      if (item.name === beer) {
        console.log("minus øl");
        item.amount = item.amount - 1;
      }
      return item;
    });

    setCart(nextCart);
  }
  const finalCart = [];
  function submitOrder() {
    console.log("submitOrder");
    const nextCart = cart.map((item) => {
      if (item.amount > 0) {
        finalCart.push(item);
      }
      return item;
    });

    console.log("finalCart", finalCart);

    setCart(nextCart);

    // const finalCart = cart.map((item) => {
    //   if (item.amount > 0) {
    //     console.log("filtreret øl", item.name, "x", item.amount);
    //     return item.name + " x " + item.amount;
    //   }
    // });
    // setCart(finalCart);

    // console.log("finalCart", finalCart);
    // console.log(finalCart.length);
    console.log("submitOrdernextCart", nextCart);
    // console.log("finalCart", finalCart);
    // store the current order in localstorage

    localStorage.setItem("currentCart", JSON.stringify(finalCart));
    // post(nextCart);
    // const createBox = props.createBox;
  }

  return (
    <motion.section style={{ position: "absolute" }} initial="initial" exit="out" animate="in" variants={props.pageVariants} transition={props.pageTransition} className="screen">
      <Window />
      <div class="window-container">
        <h2>Beers</h2>
        <ul>
          {available.map((data) => (
            <li key={data.id}>
              <div class="li-text">
                <div class="top-section">
                  <h3>{data.name}</h3>
                  <p>{data.price}</p>
                </div>
                <p>{data.description}</p>
              </div>
              <div class="li-info">
                <AddAndRemove price={data.price} total={total} setTotal={setTotal} beer={data.name} addToCart={addToCart} removeFromCart={removeFromCart} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div class="bottom-section">
        <p>Total: {total}</p>
        {/* <button onClick={submitOrder}>Continue</button> */}
        <Link className="form-button" onClick={submitOrder} to="/payment">
          TO PAYMENT
        </Link>
        {/* <Cart
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        beer={data.name}
      /> */}
      </div>
    </motion.section>
  );
}

export default BeersList;
