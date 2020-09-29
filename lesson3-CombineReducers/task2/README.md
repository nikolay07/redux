**Добавляем Redux DevTools**
* передаем в store вторым аргументом выражение -
window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()

* const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__))

