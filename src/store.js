import { extendObservable, observable, action } from "mobx";

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

    setInterval(() => {
      this.count += 1;
    }, 1000);
  }
}

const store = new Store();
export default store;
