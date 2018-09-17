import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

export const userLoggedIn = userData => ({
  type: USER_LOGGED_IN,
  userData
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(userData => {
    localStorage.setItem({ bookwormJWT: userData.token });
    dispatch(userLoggedIn(userData));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("bookwormJWT");
  dispatch(userLoggedOut());
};
