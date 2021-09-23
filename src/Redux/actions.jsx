import axios from "axios";
import * as types from "./types";

const getUsers = (users) => {
  return {
    type: types.GET_USERS,
    payload: users,
  };
};

const userDeleted = () => {
  return {
    type: types.DELETE_USER,
  };
};

const getUser = (user) => {
  return {
    type: types.GET_USER,
    payload: user,
  };
};

const userAdded = (user) => {
  return {
    type: types.ADD_USER,
    payload: user,
  };
};

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error, "error"));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then(() => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error, "error"));
  };
};

export const loadUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log(error, "error"));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        dispatch(userAdded());
        console.log(resp, "user");
      })
      .catch((error) => console.log(error, "error"));
  };
};
