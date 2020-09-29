**Подключаем Redux в React**

* устанавливаем библиотеку **"react-redux"**
* импортируем из нее компоненту Provider - **import { Provider } from "react-redux"**;
* Оборачиваем в нее компоненты и передаем аргументом store - **<Provider store={store}><Counter /></Provider>**
* подключаем store в нужную компоненту - **import { connect } from "react-redux"**;
* подключаемcя к state **const mapState = (state) =>  {counter: state};**
* подключаем actions - **const mapDispatch = { incr: increment,  decr: decrement,  res: reset}**



