import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import FormPage from "./components/pages/FormPage";
import LandingPage from "./components/pages/LandingPage";
import Beers from "./components/pages/Beers";
import Confirmation from "./components/pages/Confirmation";
import ProgressBar from "./components/ProgressBar";

// animations

import { AnimatePresence } from "framer-motion";

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

  const location = useLocation();

  return (
    <main id="main-wrapper">
      <header id="top-header">
        <h1>FooBar</h1>
        <p id="time">
          {currentDay} {currentTime}
        </p>
      </header>
      <ProgressBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={LandingPage} />
          <Route path="/beers" component={Beers} />
          <Route path="/form" component={FormPage} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default App;
