import axios from "axios";
import { config } from "../../config";
import { SET_USERS } from "./types";

export const fetchUsers = async (dispatch, getState) => {
  const users = await axios.get(`${config.API_URL}/users`);

  dispatch({
    type: SET_USERS,
    payload: users.data,
  });
};
