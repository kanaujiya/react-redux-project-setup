import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "./home/homeSlice";
import userSlice from "./user/userSlice";

export const rootReducer = combineReducers({
  home: homeSlice,
  user: userSlice,
});
