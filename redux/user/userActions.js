import axios from "axios";
import { fetchUsersFailure } from "../users/usersActions";
import { GET_SINGLE_USER, UPDATE_USER } from "./userTypes";

const getSingleUser = (user) => {
  return {
    type: GET_SINGLE_USER,
    payload: user,
  };
};

const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const fetchSingleUser = (user) => {
  return (dispatch) => {
    axios
      .get(`/api/users/${user.id}`)
      .then((res) => dispatch(getSingleUser(user)));
  };
};

export const fetchUpdateUser = (user) => {
  return (dispatch) => {
    axios
      .put(`/api/users/${user.id}`, {
        name: user.name,
        image: user.image,
      })
      .then((res) => dispatch(updateUser(user)));
  };
};
