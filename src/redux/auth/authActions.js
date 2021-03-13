import { createAction } from "@reduxjs/toolkit";

export const getCurrentUserRequest = createAction("user/getCurrentUserRequest");
export const getCurrentUserSuccess = createAction("user/getCurrentUserSuccess");
export const getCurrentUserError = createAction("user/getCurrentUserError");

export const registerRequest = createAction("user/registerRequest");
export const registerSuccess = createAction("user/registerSuccess");
export const registerError = createAction("user/registerError");

export const loginRequest = createAction("user/loginRequest");
export const loginSuccess = createAction("user/loginSuccess");
export const loginError = createAction("user/loginError");

export const logoutRequest = createAction("user/logoutRequest");
export const logoutSuccess = createAction("user/logoutSuccess");
export const logoutError = createAction("user/logoutError");
