import { ADD_user, setusers, SAVE_users, DEL_User } from "../actions/actions";
import { defineUser } from "../actions/actions";
import initialState from "./initialState";

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_users: {
      return { ...state, users: action.payload };
    }
    case DEL_User: {
      return { ...state, users: action.payload };
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
  fetch("http://localhost:8080/users/" + user.id, {
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
  const users = await fetch("http://localhost:8080/users/all").then((res) =>
    res.json()
  );
  dispatch(setusers(users));
};

export const saveUser = () => async (dispatch, getState) => {
  const user = getState().userDefined;
  fetch("http://localhost:8080/users", {
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
