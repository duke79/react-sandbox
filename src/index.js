import React from "react";
import ReactDOM from "react-dom";
import SimpleMediaCard from "./SimpleMediaCard";

import { observer } from "mobx-react";
import { observable } from "mobx";

const App = observer(
  class App extends React.Component {
    render() {
      return (
        <div className="App">
          <h1>Hello Hippies {this.props.store.timer}</h1>
          <SimpleMediaCard />
        </div>
      );
    }
  }
);

const store = observable({
  timer: 0
});
setInterval(() => {
  store.timer += 1;
}, 1000);

const rootElement = document.getElementById("root");
ReactDOM.render(<App store={store} />, rootElement);
