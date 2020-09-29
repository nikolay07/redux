import store from "./store";
import { setUser, removeUser } from "./user.actions";
import { addProduct, removeProduct } from "./cart.actions";
import { setLanguage } from "./language.actions";

store.subscribe(() => console.log(store.getState())); //подписка на изменения store
store.dispatch(setLanguage("ru")); // установить язык "ru"
store.dispatch(addProduct({ id: 1, name: "bread" })); // добавить продукт
store.dispatch(addProduct({ id: 2, name: "milk" })); // добавить продукт
store.dispatch(setUser({ name: "Nik" })); // добавить пользователя
