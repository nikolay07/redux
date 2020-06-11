import "./index.scss";
import store, { increment, decrement, reset } from "./store";

const resultElem = document.querySelector(".counter__result");
const incrementBtn = document.querySelector(
  '[data-action="increment"]'
);
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector(
  '[data-action="decrement"]'
);
