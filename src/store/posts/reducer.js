import { SET_POSTS, START_LOADING } from "./types";

const initialState = {
  loading: false,
  posts: [],
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_POSTS: {
      return {
        loading: false,
        posts: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
