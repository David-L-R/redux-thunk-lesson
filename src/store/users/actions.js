import axios from "axios";
import { config } from "../../config";
import { SET_USERS, START_LOADING } from "./types";

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function usersFetched(users) {
  return {
    type: SET_USERS,
    payload: users,
  };
}

export async function fetchUsers(dispatch, getState) {
  dispatch(startLoading());
  const response = await axios.get(`${config.API_URL}/users`);
  dispatch(usersFetched(response.data));
}
