import axios from "axios";
import { config } from "../../config";
import { SET_POST, SET_POSTS, START_LOADING } from "./types";

export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};

export const postsFetched = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const postFetched = (post) => ({
  type: SET_POST,
  payload: post,
});

export const fetchPosts = async (dispatch, getState) => {
  dispatch(startLoading());
  const response = await axios.get(`${config.API_URL}/posts`);
  dispatch(postsFetched(response.data));
};

export const fetchPost = (id) => {
  return async function thunk(dispatch, getState) {
    dispatch(startLoading());
    const response = await axios.get(`${config.API_URL}/posts/${id}`);
    dispatch(postFetched(response.data));
  };
};
