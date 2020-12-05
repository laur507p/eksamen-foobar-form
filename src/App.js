import React from "react";

import Form from "./components/Form";

function App() {
  return (
    <main>
      <section className="screen" id="screen1"></section>
      <section className="screen" id="screen2"></section>
      <section className="screen" id="screen3">
        <Form />
        <a href="#screen4" onClick={nextScreen}>
          Next screen
        </a>
      </section>

      <section className="screen" id="screen4"></section>
    </main>
  );

  function nextScreen() {
    // ??????
  }
}

export default App;
