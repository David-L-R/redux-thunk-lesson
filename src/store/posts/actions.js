import axios from "axios";
import { config } from "../../config";
import { SET_USERS } from "../users/types";
import { SET_POSTS, START_LOADING } from "./types";

// Component -> fetchPosts
// fetching from backend (axios)
// dispatch(another action)
export const fetchPosts = async (dispatch, getState) => {
  // set a loader
  dispatch({
    type: START_LOADING,
  });
  // fetch posts
  const posts = await axios.get(`${config.API_URL}/posts`);

  //   const users = await axios.get(`${config.API_URL}/users`);

  //   dispatch({
  //     type: SET_USERS,
  //     payload: users.data,
  //   });

  dispatch({
    type: SET_POSTS,
    payload: posts.data,
  });
};
