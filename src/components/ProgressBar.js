import React from "react";
import { Link } from "react-router-dom";

// get props to say what the progress status is???

export default function ProgressBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landing page</Link>
        </li>
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
  );
}
