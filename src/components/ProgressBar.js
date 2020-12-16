import React from "react";
import { Link } from "react-router-dom";

export default function ProgressBar() {
  return (
    <div className="navigation">
      <div id="progressbar" className="progressbar"></div>
      <nav>
        <ul>
          <li>1.Choose Beer/s</li>
          <li>2.Pay Up</li>
          <li>3.You're done!</li>
        </ul>
      </nav>
    </div>
  );
}
