import axios from "axios";
import { config } from "../../config";
import { SET_USERS, USERS_START_LOADING } from "./types";

export const fetchUsers = async (dispatch, getState) => {
  dispatch({
    type: USERS_START_LOADING,
  });

  const users = await axios.get(`${config.API_URL}/users`);

  dispatch({
    type: SET_USERS,
    payload: users.data,
  });
};
