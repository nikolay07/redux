import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import usersReducer from "./users.reducer";

//комбинируем 2 редьсера 
const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

//передаем их в store и добавляем Redux DevTools
const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
