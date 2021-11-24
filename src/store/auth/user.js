import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    updateUser: (state, action) => {
      state.data = action.payload;
    },
    resetUser: (state, action) => {
      state = initialState;
    },
  },
});

export const { setUser, updateUser, resetUser } = slice.actions;
export default slice.reducer;
