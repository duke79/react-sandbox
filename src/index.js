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
    let count = this.props.store.count;

    return (
      <div className="App">
        <h1>Hello Hippies {count}</h1>
        <SimpleMediaCard />
      </div>
    );
  }
};
const AppO = observer(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppO store={store} />, rootElement);
