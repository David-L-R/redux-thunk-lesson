import axios from "axios";
import { config } from "../../config";
import { SET_POSTS, START_LOADING } from "./types";

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function postsFetched(posts) {
  return {
    type: SET_POSTS,
    payload: posts,
  };
}

export async function fetchPosts(dispatch, getState) {
  dispatch(startLoading());
  const response = await axios.get(`${config.API_URL}/posts`);
  dispatch(postsFetched(response.data));
}
