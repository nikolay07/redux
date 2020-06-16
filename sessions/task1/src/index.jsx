import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

const rootElem = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElem
);
