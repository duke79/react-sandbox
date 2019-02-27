import { extendObservable, observable, action } from "mobx";
import axios from "axios";

class Store {
  increment = action("increment", function() {
    this.count++;
  });
  decrement = action("decrement", function() {
    this.count--;
  });

  constructor() {
    extendObservable(this, {
      id: Math.random(),
      count: 0
    });

    this.rount = 0;

    setInterval(() => {
      this.count += 1;
      // this.rount += 1;
    }, 1000);

    let tmdb_api_home = "https://api.themoviedb.org/3";
    let tmdb_api_key = "e30bdefcb66c118c558f0793cf22e8e2";
    axios
      .get(`${tmdb_api_home}/movie/top_rated?api_key=${tmdb_api_key}&page=3`)
      .then(res => {
        console.log(res);
        let first_title = res.data.results[0].title;
        // alert();
        this.rount = first_title;
      });
  }
}

const store = new Store();
export default store;
