import React from "react";

import FormPage from "./components/FormPage";
import LandingPage from "./components/LandingPage";
import Beers from "./components/Beers";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <main>
      <LandingPage />
      <Beers />
      <FormPage />
      <Confirmation />
    </main>
  );
}

export default App;
