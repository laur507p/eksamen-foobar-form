import React from "react";
import { Link } from "react-router-dom";

export default function ProgressBar() {
  return (
    <div className="navigation">
      <div id="progressbar" className="progressbar"></div>
      <nav>
        <ul>
          <li>
            <Link to="/beers">1.Choose Beer/s</Link>
          </li>
          <li>
            <Link to="/payment">2.Pay Up</Link>
          </li>
          <li>
            <Link to="/confirmation">3.You're done</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
