import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home/homeSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    user: userSlice,
  },
});
