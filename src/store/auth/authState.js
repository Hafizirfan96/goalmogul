import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const slice = createSlice({
  name: "authState",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    restAuthState: (state, action) => {
      state = initialState;
    },
  },
});
export const { setToken, restAuthState } = slice.actions;
export default slice.reducer;
