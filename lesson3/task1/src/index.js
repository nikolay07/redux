import store from "./store";
import { increment, decrement } from "./counter.actions";

store.subscribe(() => console.log(store.getState()));

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(reset());

// store.dispatch(addUser({ id: 76, name: "Sarah" }));
// store.dispatch(addUser({ id: 2, name: "Bob" }));
// store.dispatch(updateUser(2, { name: "Tom" }));
// store.dispatch(deleteUser(76));
