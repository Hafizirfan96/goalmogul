import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objectKey: "",
  signedRequest: "",
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setObjectKey: (state, action) => {
      state.objectKey = action.payload;
    },
    setSignedRequest: (state, action) => {
      state.signedRequest = action.payload;
    },
  },
});
export const { setObjectKey, setSignedRequest } = slice.actions;
export default slice.reducer;
