import { SET_POSTS, POSTS_START_LOADING } from "./types";

const initialState = {
  loading: false,
  posts: [],
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
    default: {
      return state;
    }
  }
}
