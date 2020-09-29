export const ADDUSER = "USERS/ADDUSER";
export const DELETEUSER = "USERS/DELETEUSER";

export const addUser = (data) => {
  return {
    type: ADDUSER,
    payload: { user: data },
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETEUSER,
    payload: { id: id },
  };
};
