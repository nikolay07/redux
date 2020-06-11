import { createStore } from "redux";
import { usersReducer } from "./users.reducers";

const store = createStore(usersReducer);

export default store;
