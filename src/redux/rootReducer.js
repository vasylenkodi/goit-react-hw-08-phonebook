import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./Auth/AuthSlice";

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
})
