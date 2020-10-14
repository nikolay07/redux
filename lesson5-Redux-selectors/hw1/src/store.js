import { filterReducer } from "./users/user.reducer";
import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
  users: filterReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
