import axios from "axios";
import { GET_SINGLE_USER } from "./userTypes";

const getSingleUser = (user) => {
  return {
    type: GET_SINGLE_USER,
    payload: user,
  };
};

export const fetchSingleUser = (user) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then((res) => dispatch(getSingleUser(user)));
  };
};
