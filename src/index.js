import React from "react";
import ReactDOM from "react-dom";
import GridLayout from "./GridLayout";

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
        <GridLayout
          elems={
            store.top_rated_movies
              ? store.top_rated_movies.map(elem => {
                  return elem.title;
                })
              : ["De rien!"]
          }
        />
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
