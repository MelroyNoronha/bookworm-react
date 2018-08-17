import { USER_LOGGED_IN } from "../types";
import api from "../api";

export const userLoggedIn = userData => ({
  type: USER_LOGGED_IN,
  userData
});

export const login = credentials => dispatch =>
  api.user
    .login(credentials)
    .then(userData => dispatch(userLoggedIn(userData)));
