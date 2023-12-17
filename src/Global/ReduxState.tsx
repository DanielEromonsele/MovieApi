import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: false,
};

const reduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    addGenres: (state, { payload }) => {
      state.genres = payload;
    },
  },
});

export const { addGenres } = reduxState.actions;

export default reduxState.reducer;