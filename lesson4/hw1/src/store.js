import { paginationReducer } from "./users/user.reducer";
import { createStore } from "redux";

const store = createStore(
  paginationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
