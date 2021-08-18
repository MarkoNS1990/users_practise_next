import { FETCH_USERS_BEGIN } from "./usersTypes";

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
