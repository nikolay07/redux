export const optionsListSelectors = (state) => {
  return state.options.optionsList;
};

export const selectedOptionsSelectors = (state) => {
  const allOptions = state.options.optionsList;
  const selectedIds = state.options.selected;

  return allOptions.filter((option) =>
    selectedIds.includes(option.id)
  );
};

export const availableOptionsSelectors = (state) => {
  const allOptions = state.options.optionsList;
  const selectedIds = state.options.selected;

  return allOptions.filter(
    (option) => !selectedIds.includes(option.id)
  );
};
