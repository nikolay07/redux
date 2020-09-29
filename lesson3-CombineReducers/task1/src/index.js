import store from "./store";
import { increment, decrement, reset } from "./counter.actions"; // импорт actions счетчика
import { addUser, deleteUser, updateUser } from "./users.actions"; // импорт actions пользователей

// Подписка на изменение store => выводит в console
store.subscribe(() => console.log(store.getState()));

// действия со счетчиком
store.dispatch(increment()); //добавить 1
store.dispatch(decrement()); // отнять 1
store.dispatch(increment());//добавить 1
store.dispatch(increment());//добавить 1
store.dispatch(reset()); //сбросить

// действия со счетчиком с пользователями
store.dispatch(addUser({ id: 76, name: "Sarah" })); // добавить пользователя
store.dispatch(addUser({ id: 2, name: "Bob" })); // добавить пользователя
store.dispatch(updateUser(2, { name: "Tom" })); // обновить данные пользователя
store.dispatch(deleteUser(76)); // удалить пользователя
