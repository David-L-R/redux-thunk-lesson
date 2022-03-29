import { combineReducers } from "redux";
import posts from "./posts/reducer";

const combinedReducer = combineReducers({
  posts,
});

export default combinedReducer;
