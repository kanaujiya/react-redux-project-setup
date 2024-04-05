import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: {
    isFetching: false,
  },
  user: {
    name: "collins",
    isAuthenticated: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching: (state, action) => {
      state.state.isFetching = true;
      state.user.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { setIsFetching } = userSlice.actions;

export default userSlice.reducer;
