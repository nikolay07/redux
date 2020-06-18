import { createStore, applyMiddleware } from "redux";
import { counterReducer } from "./counter.reducer";
const logger = (store) => (next) => (action) => {
  console.log(action.type);
  return next(action);
};
const store = createStore(
  counterReducer,
  applyMiddleware(logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
