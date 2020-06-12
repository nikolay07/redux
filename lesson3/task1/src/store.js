import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter.reducers";
import usersReducer from "./users.reducers";
const appReduser = combineReducers({
  counter: counterReducer,
  user: usersReducer,
});
const store = createStore(appReduser);

export default store;
