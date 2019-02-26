import React from "react";
import ReactDOM from "react-dom";
import SimpleMediaCard from "./SimpleMediaCard";

import { observer } from "mobx-react";
import { observable } from "mobx";
import store from "./store";

const App = class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // store.increment();
    // let store = this.props.store;

    return (
      <div className="App">
        <h1>Hello Hippies {store.count}</h1>
        <SimpleMediaCard />
        <button onClick={() => store.increment()}>Increment</button>
      </div>
    );
  }
};
const AppO = observer(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppO />, rootElement);
