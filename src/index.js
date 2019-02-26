import React from "react";
import ReactDOM from "react-dom";
import SimpleMediaCard from "./SimpleMediaCard";

import { observer } from "mobx-react";
import { observable } from "mobx";
import store from "./store";

class App extends React.Component {
  render() {
    // store.increment();

    return (
      <div className="App">
        <h1>Hello Hippies {store.count}</h1>
        <SimpleMediaCard />
      </div>
    );
  }
}
const AppO = observer(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppO />, rootElement);
