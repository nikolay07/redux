**Подключаем Redux в несколько компонент React**

* устанавливаем библиотеку **"react-redux"**
* импортируем из нее компоненту Provider - **import { Provider } from "react-redux"**;
* Оборачиваем в нее компоненты и передаем аргументом store -
 **<Provider store={store}><Counter /><Users /></Provider>**
* Комбинируем редьсеры в store **const reducer = combineReducers({users: usersReducer, counter: counterReducer,})**

* **Users**
* подключаем store - **import { connect } from "react-redux"**;
* подключаемcя в компоненте Users к state из usersReducer:
* **const mapState=(state)=> { return { users: state.users.usersList }}**
* подключаем actions - **import {addUser, deleteUser} from "./users.actions"**
* подключаем store.dispatch() - **const mapDispatch = {createUser: addUser, deleteUser: deleteUser}**
* экспортируем обернутый реакт компонент **export connect(mapState, mapDispatch)(Users);**

* **Counter**
* подключаем store - **import { connect } from "react-redux"**;
* подключаемcя в компоненте Counter к state из usersReducer:
* **const mapState = (state) => { return { counter: state.counter } }**
* подключаем actions - **import {increment, decrement, reset} from "./users.actions"**
* подключаем store.dispatch()-
* **const mapDispatch = {incr: increment, decr: decrement, res: reset}**
* экспортируем обернутый реакт компонент **export connect(mapState, mapDispatch)(Counter);**


