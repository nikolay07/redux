import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./counter/Counter";
import Users from "./users/Users";

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};
export default App;
// <Provider store={store.counter}>
//   <Counter />
// </Provider>
