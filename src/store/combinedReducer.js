import { combineReducers } from "redux";
import posts from "./posts/reducer";
import users from "./users/reducer";
const combinedReducer = combineReducers({
  posts,
  users,
});

export default combinedReducer;
