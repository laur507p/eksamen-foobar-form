import React, { useState } from "react";

export default function LandingPage() {
  const [isClicked, setIsClicked] = useState(false);

  const onButtonClick = () => {
    console.log("onbuttonclick");
    setIsClicked(!isClicked);
  };

  return (
    <section className="screen" id="screen1">
      <a href="#screen2" className="testbutton">
        Next
      </a>
    </section>
  );
  function nextScreen() {
    // window.location = "#screen2";
    document.querySelector("#screen1").setAttribute("className", "slide-left");
  }
}
//className={isClicked === true ? "slide-left" : "none"}
// onClick={onButtonClick}
