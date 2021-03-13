import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from "./authActions";

const initialUserState = { name: null, email: null };

const user = createReducer(
  {},
  {
    [getCurrentUserSuccess]: (_, { payload }) => payload,
    [loginSuccess]: (_, { payload }) => payload.user,
    [registerSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => initialUserState,
  }
);

const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.token,
  [registerSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [getCurrentUserSuccess]: () => true,
  [loginSuccess]: () => true,
  [registerSuccess]: () => true,
  [logoutSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [registerError]: () => false,
  [loginError]: () => false,
});

const error = createReducer(null, {
  [loginError]: (_, { payload }) => payload,
  [registerError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
