import React from "react";
import { Link } from "react-router-dom";

// get props to say what the progress status is???
// function createBox() {
//   console.log("createBox");
//   for (let i = 0; i < 7; i++) {
//     task(i);
//   }
// }
// function task(i) {
//   setTimeout(function () {
//     console.log("task");
//     const box = document.createElement("div");
//     box.classList.add("progressbox");
//     box.style.width = "15px";
//     box.style.height = "15px";
//     box.style.backgroundColor = "blue";
//     document.getElementById("container").appendChild(box);
//   }, 200 * i);
// }

export default function ProgressBar() {
  return (
    <div className="navigation">
      <div className="progressbar">
        <span id="container" className="progressbox_container"></span>
        <span className="progressbox_overlay"></span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/beers">Beers</Link>
          </li>
          <li>
            <Link to="/payment">Formpage</Link>
          </li>
          <li>
            <Link to="/confirmation">Confirmation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
