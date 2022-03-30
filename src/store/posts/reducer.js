import { SET_POSTS, POSTS_START_LOADING, SET_POST } from "./types";

const initialState = {
  loading: false,
  posts: [],
  post: null,
};

export default function feedSliceReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POSTS_START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_POSTS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    case SET_POST:
      return {
        ...state,
        loading: false,
        post: payload,
      };
    default: {
      return state;
    }
  }
}
