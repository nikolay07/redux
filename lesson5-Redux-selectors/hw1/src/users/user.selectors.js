export const userSelector = (state) => {
  const allUsers = state.users.usersList;
  const filterText = state.users.filterText;
  return allUsers.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );
};
