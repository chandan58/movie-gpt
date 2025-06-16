import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: { showGptSearch: false ,gptMovieResult: null,movieNames: null,movieResults: null},
  reducers: {
    gptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const {movieNames, movieResults, gptMovieResult} = action.payload;
      state.gptMovieResult = gptMovieResult;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { gptSearchView,addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
