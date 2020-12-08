import React from "react";

// import FormPage from "./components/FormPage";
// import LandingPage from "./components/LandingPage";
// import Beers from "./components/Beers";
// import Confirmation from "./components/Confirmation";

function App() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let currentTime = hours + ":" + minutes;
  let day = date.getDay();

  console.log(day);

  return (
    <main id="main-wrapper">
      <header id="top-header">
        <h1>FooBar</h1>
        <p id="time">{currentTime}</p>
      </header>
      {/* <LandingPage />
      <Beers />
      <FormPage />
      <Confirmation /> */}
    </main>
  );
}

export default App;
