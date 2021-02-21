import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add");

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

export default { addContact, deleteContact, changeFilter };
