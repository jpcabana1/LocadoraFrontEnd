export const ADD_user = "ADD_user";
export const SAVE_users = "SET_users";
export const GET_User = "GET_User";
export const DEL_User = "DEL_User";
export const FILTER = "FILTER";

export const defineUser = (user) => ({
  type: ADD_user,
  payload: user,
});

export const setusers = (users) => ({
  type: SAVE_users,
  payload: users,
});

export const deleteUser = (user) => ({
  type: DEL_User,
  payload: user,
});

export const filterUsers = (users) => ({
  type: FILTER,
  payload: users,
});
