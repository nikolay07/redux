export const GO_NEXT = "PAGINATION/GO_NEXT";
export const GO_PREV = "PAGINATION/GO_PREV";

export const goNext = () => {
  return {
    type: GO_NEXT,
  };
};

export const goPrev = () => {
  return {
    type: GO_PREV,
  };
};
