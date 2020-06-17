export const SET_FILTER_TEXT = "SET_FILTER_TEXT";

export const setFilterText = (filterText) => {
  return {
    type: SET_FILTER_TEXT,
    payload: {
      filterText,
    },
  };
};
