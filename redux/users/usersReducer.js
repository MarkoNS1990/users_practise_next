import { UPDATE_USER } from "../user/userTypes";
import {
  DELETE_USER,
  FETCH_USERS_BEGIN,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  GET_SINGLE_USER,
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
        error: action.payload,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        users: [...state.users.filter((user) => user !== action.payload)],
      };
    case UPDATE_USER:
      const index = action.payload.id;
      state.users.splice(index, 1, action.payload);
      return {
        ...state,
        users: [...state.users],
      };

    default:
      return state;
  }
};

export default usersReducer;
