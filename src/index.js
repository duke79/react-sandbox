import React from "react";
import ReactDOM from "react-dom";
import SimpleMediaCard from "./SimpleMediaCard";

import { observer } from "mobx-react";
import { observable } from "mobx";
import store from "./store";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // store.increment();
    // let store = this.props.store;

    return (
      <div className="App">
        <h1>
          {store.page}{" "}
          {store.top_rated_movies ? store.top_rated_movies[0].title : null}
        </h1>
        <SimpleMediaCard />
        <button onClick={() => store.set_page(store.page + 1)}>
          Increment
        </button>
      </div>
    );
  }
}
const AppO = observer(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppO />, rootElement);
