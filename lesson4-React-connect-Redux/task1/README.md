**Подключаем Redux в одну компоненту React**

* устанавливаем библиотеку **"react-redux"**
* импортируем из нее компоненту Provider - **import { Provider } from "react-redux"**;
* Оборачиваем в нее компоненты и передаем аргументом store **<Provider store={store}><Counter/></Provider>**
* подключаем store в нужную компоненту - **import { connect } from "react-redux"**;
* подключаемcя к state из reducer **const mapState = (state) => {return {counter: state}}**
* подключаем actions - **import { increment, decrement, reset } from "../counter.actions"**
* подключаем store.dispatch() **const mapDispatch = { incr: increment,  decr: decrement,  res: reset}**
* экспортируем обернутый компонент Counter - **export connect(mapState, mapDispatch)(Counter)**