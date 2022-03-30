import { SET_USERS, USERS_START_LOADING } from "./types";

const initialState = {
  loading: false,
  users: [],
};

export default function feedSliceReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USERS_START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_USERS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    default: {
      return state;
    }
  }
}
