import React from "react";
import ReactDOM from "react-dom";
import SimpleMediaCard from "./SimpleMediaCard";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Hippies</h1>
      <SimpleMediaCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
