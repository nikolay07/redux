**Комбинируем 2 разных редьюсера в Store**
* комбинируем редьсеры - const appReducer = combineReducers({counterReducer, usersReducer}) 
* передаем их в стор + Redux DevTools - const store = createStore(appReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__())

