import React from "react";

import FormPage from "./components/pages/FormPage";
import LandingPage from "./components/pages/LandingPage";
import Beers from "./components/pages/Beers";
import Confirmation from "./components/pages/Confirmation";

function App() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let currentTime = hours + ":" + minutes;
  let day = date.getDay();
  let currentDay;

  if (day === 1) {
    currentDay = "Mon";
  } else if (day === 2) {
    currentDay = "Tue";
  } else if (day === 3) {
    currentDay = "Wed";
  } else if (day === 4) {
    currentDay = "Thu";
  } else if (day === 5) {
    currentDay = "Fri";
  } else if (day === 6) {
    currentDay = "Sat";
  } else if (day === 7) {
    currentDay = "Sun";
  }

  return (
    <main id="main-wrapper">
      <header id="top-header">
        <h1>FooBar</h1>
        <p id="time">
          {currentDay} {currentTime}
        </p>
      </header>
      {/* <div id="top-spacer"></div> */}

      <div id="content-wrapper">
        <LandingPage />
        <Beers />
        <FormPage />
        <Confirmation />
      </div>
    </main>
  );
}

export default App;
