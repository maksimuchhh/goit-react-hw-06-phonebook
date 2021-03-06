import { createAction } from "@reduxjs/toolkit";

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
