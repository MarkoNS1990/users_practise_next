import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "./usersTypes";

const initialState = {
  users: [],
  error: "",
  loading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
