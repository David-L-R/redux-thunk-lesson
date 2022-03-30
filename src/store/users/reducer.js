import { SET_USERS } from "./types";

const initialState = {
  loading: false,
  users: [],
};

export default function feedSliceReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload,
      };
    default: {
      return state;
    }
  }
}
