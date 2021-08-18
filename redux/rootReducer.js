import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
});

export default rootReducer;
