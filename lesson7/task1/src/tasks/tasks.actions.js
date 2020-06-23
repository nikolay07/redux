import { fetchTasksList } from "./tasksGateway";

export const TASKS_LIST_RECIEVED = "TASKS_LIST_RECIEVED";
// синхронный action
export const tasksListRecieved = (tasksList) => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: { tasksList },
  };
  return action;
};

// асинхронный action - Action Creator - возвращают асинхронный action ( функцию  - thunk)
export const getTaskList = () => {
  const thunkActions = function (dispatch) {
    fetchTasksList().then((tasksList) =>
      dispatch(tasksListRecieved(tasksList))
    );
  };
  return thunkActions;
};
