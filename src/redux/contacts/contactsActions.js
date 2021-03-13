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

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addRequest");
export const addContactSuccess = createAction("contacts/addSuccess");
export const addContactError = createAction("contacts/addError");

export const deleteContactRequest = createAction("contacts/deleteRequest");
export const deleteContactSuccess = createAction("contacts/deleteSuccess");
export const deleteContactError = createAction("contacts/deleteError");

export const changeFilter = createAction("contacts/changeFilter");
