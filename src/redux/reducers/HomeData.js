import { createSlice } from "@reduxjs/toolkit";
import { homeAction } from "../actions/HomeData";

const initialState = {
  getVideos: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(homeAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(homeAction.fulfilled, (state, action) => {
        state.loading = false;
        state.getVideos = action.payload;
      })
      .addCase(homeAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { getVideos } = homeSlice.actions;
export default homeSlice.reducer;
