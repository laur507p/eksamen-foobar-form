import React, { useState } from "react";

export default function LandingPage() {
  const [isClicked, setIsClicked] = useState(false);

  const onButtonClick = () => {
    console.log("onbuttonclick");
    setIsClicked(!isClicked);
  };

  return (
    <section className={isClicked === true ? "slide-left" : "none"} id="screen1">
      <a href="#screen2">Next</a>
    </section>
  );
  function nextScreen() {
    // window.location = "#screen2";
    document.querySelector("#screen1").setAttribute("className", "slide-left");
  }
}

// onClick={onButtonClick}
