import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import usersReducer from "./users.reducer";

const appReduser = combineReducers({
  counter: counterReducer,
  user: usersReducer,
});
const store = createStore(appReduser);

export default store;
