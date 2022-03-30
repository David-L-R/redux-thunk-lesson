import axios from "axios";
import { config } from "../../config";
import { SET_POSTS, POSTS_START_LOADING, SET_POST } from "./types";

export const fetchPosts = async (dispatch, getState) => {
  dispatch({
    type: POSTS_START_LOADING,
  });

  const posts = await axios.get(`${config.API_URL}/posts`);

  dispatch({
    type: SET_POSTS,
    payload: posts.data,
  });
};

export const fetchPostWithComments = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: POSTS_START_LOADING,
    });

    const response = await Promise.all([
      axios.get(`${config.API_URL}/posts/${id}`),
      axios.get(`${config.API_URL}/comments?postId=${id}`),
    ]);

    const post = response[0].data;
    const comments = response[1].data;

    dispatch({
      type: SET_POST,
      payload: {
        ...post,
        comments: comments,
      },
    });
  };
};
