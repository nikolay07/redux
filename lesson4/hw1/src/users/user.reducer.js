import { GO_NEXT, GO_PREV } from "./user.actions";

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
  itemsPerPage: 3,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_NEXT: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }
    case GO_PREV: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
    default:
      return state;
  }
};
