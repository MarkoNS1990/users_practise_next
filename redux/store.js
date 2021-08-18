import { createStore, applyMiddleware } from "redux";
import usersReducer from "./users/usersReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  usersReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
