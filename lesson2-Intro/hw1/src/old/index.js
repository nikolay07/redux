import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.dispatch(addUser({ id: 537, name: "Nik" }));
store.dispatch(addUser({ id: 632, name: "Petro" }));
store.dispatch(addUser({ id: 745, name: "Ivan" }));
store.dispatch(deleteUser(632));

console.log(store.getState());
