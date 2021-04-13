import {
  ADD_user,
  setusers,
  SAVE_users,
  DEL_User,
  FILTER,
} from "../actions/actions";
import { defineUser } from "../actions/actions";
import initialState from "./initialState";

const urlPostPut = "http://localhost:8080/users";
const urlGet = "http://localhost:8080/users/all";
const urlDelete = "http://localhost:8080/users/";

export const usersReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SAVE_users: {
      return { ...state, users: action.payload };
    }
    case DEL_User: {
      return { ...state, users: action.payload };
    }
    case FILTER: {
      return { ...state, usersFiltered: action.payload };
    }
    case ADD_user: {
      return { ...state, userDefined: action.payload };
    }
    default:
      return state;
  }
};

export const deleteUser = () => async (dispatch, getState) => {
  const user = getState().userDefined;
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
};

export const saveUser = () => async (dispatch, getState) => {
  const user = getState().userDefined;
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
