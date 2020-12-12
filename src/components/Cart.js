import React from "react";
// import Beers from "./pages/Beers";

export default function Cart(props) {
  console.log("item.name", props.beer);
  return (
    <div>
      <p>Cart:{(props.name, "x", props.amount)} </p>
    </div>
  );
}
