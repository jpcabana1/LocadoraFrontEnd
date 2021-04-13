import {
  ADD_user,
  setusers,
  SAVE_users,
  DEL_User,
  FILTER,
  filterUsers,
} from "../actions/actions";
import { defineUser } from "../actions/actions";
import initialState from "./initialState";

const urlPostPut = "http://localhost:8080/users";
const urlGet = "http://localhost:8080/users/all";
const urlDelete = "http://localhost:8080/users/";

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_users: {
      let newFormUserState = { ...state.formUserState };
      newFormUserState = { ...newFormUserState, users: action.payload };
      return { ...state, formUserState: newFormUserState };
    }
    case DEL_User: {
      return { ...state, users: action.payload };
    }
    case ADD_user: {
      let newFormUserState = { ...state.formUserState };
      newFormUserState = { ...newFormUserState, userDefined: action.payload };
      return { ...state, formUserState: newFormUserState };
    }
    case FILTER: {
      let newFormUserState = { ...state.formUserState };
      newFormUserState = { ...newFormUserState, usersFiltered: action.payload };
      return { ...state, formUserState: newFormUserState };
    }
    default:
      return state;
  }
};

export const deleteUser = () => async (dispatch, getState) => {
  const user = getState().formUserState.userDefined;
  console.log(user);
  fetch(urlDelete + user.id, {
    method: "DELETE",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((result) => {
      if (result === user.id) {
        alert(user.name + " foi removido");
        dispatch(defineUser({}));
        dispatch(loadusers());
      }
    });
};

export const loadusers = () => async (dispatch, getState) => {
  const users = await fetch(urlGet).then((res) => res.json());
  dispatch(setusers(users));
  dispatch(
    filterUsers(
      users.filter((user) =>
        user.name.includes(document.getElementById("txtSearch").value)
      )
    )
  );
};

export const saveUser = () => async (dispatch, getState) => {
  const user = getState().formUserState.userDefined;
  fetch(urlPostPut, {
    method: user.id.trim() === "" ? "POST" : "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then(
      (result) => {
        dispatch(defineUser({}));
        dispatch(loadusers());
      },
      (error) => {
        alert(error);
      }
    );
};
