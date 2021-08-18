import axios from "axios";
import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
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

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersBegin);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(fetchUsersSuccess(res.data)))
      .catch((err) => dispatch(fetchUsersFailure(err)));
  };
};
