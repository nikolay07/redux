export const ON_CHANGE = "USER/ON_CHANGE";

export const onChange = (text) => {
  return {
    type: ON_CHANGE,
    payload: {
      text,
    },
  };
};
