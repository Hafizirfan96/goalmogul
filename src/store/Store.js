import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../store/CounterSlice";
import { combineReducers } from "redux";
// import authReducer from "./auth";
import authReducer from "../store/auth/authState";
import userReducer from "../store/auth/user";
import profileReducer from "../store/auth/Profile";

const combineReducer = combineReducers({
  // counter: counterReducer,
  auth: authReducer,
  user: userReducer,
  profile: profileReducer,

  // authState: authReducer,
});

const store = configureStore({
  reducer: combineReducer,
});

export default store;
