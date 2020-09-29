**Создание Redux store, в котором хранится список пользователей**

* store.dispatch(addUser({ id: 745, name: "Ivan" })) - добавить пользователя с id и name
* store.dispatch(deleteUser(632)) - удалить пользователя под id
* console.log(store.getState()) - вывести значение store в косоль