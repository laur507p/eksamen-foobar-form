import React, { useState } from "react";
// import Beers from "./pages/Beers";

export default function AddAndRemove(props) {
  const [number, setNumber] = useState(0);
  
  
  function subtract() {
    if (number > 0) {
      setNumber(number - 1);
      props.setTotal(props.total - props.price);
      props.removeFromCart(props.beer);
    }
  }

  function add() {
    setNumber(number + 1);
    props.setTotal(props.total + props.price);
    props.addToCart(props.beer);
    
  }

  return (
    <div>
      <button onClick={subtract}>-</button>
      {number}
      <button onClick={add}>+</button>
    </div>
   
  );
}
