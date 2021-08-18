import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  FETCH_USERS_BEGIN,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  GET_SINGLE_USER,
} from "./usersTypes";

const fetchUsersBegin = () => {
  return {
    type: FETCH_USERS_BEGIN,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const deleteUser = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersBegin);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(fetchUsersSuccess(res.data)));
  };
};

export const fetchDeleteUser = (user) => {
  return (dispatch) => {
    dispatch(fetchUsersBegin);
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then((res) => dispatch(deleteUser(user)));
  };
};

export const fetchAddUser = (user) => {
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(addUser(user)));
  };
};
