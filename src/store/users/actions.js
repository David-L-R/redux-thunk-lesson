import axios from "axios";
import { config } from "../../config";
import { SET_USERS, START_LOADING } from "./types";

export const startLoading = () => ({
  type: START_LOADING,
});

const usersFetched = (users) => ({
  type: SET_USERS,
  payload: users,
});

export async function fetchUsers(dispatch, getState) {
  dispatch(startLoading());
  const response = await axios.get(`${config.API_URL}/users`);
  dispatch(usersFetched(response.data));
}
