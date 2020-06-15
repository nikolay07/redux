import { NEXT_PAGE, PREV_PAGE } from "./users.actions";

const initialState = {
  usersList: [
    {
      id: "id-01",
      age: 33,
      name: "Taras",
    },
    {
      id: "id-11",
      age: 19,
      name: "Oleg",
    },
    {
      id: "id-12",
      age: 29,
      name: "Rostik",
    },
    {
      id: "id-13",
      age: 25,
      name: "Ivan",
    },
    {
      id: "id-14",
      age: 34,
      name: "Nik",
    },
    {
      id: "id-15",
      age: 31,
      name: "Vasil",
    },
    {
      id: "id-16",
      age: 25,
      name: "Andrey",
    },
    {
      id: "id-17",
      age: 39,
      name: "Semeb",
    },
  ],

  currentPage: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    default:
      return state;
  }
};

export default usersReducer;
