import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: { showGptSearch: false },
  reducers: {
    gptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { gptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
