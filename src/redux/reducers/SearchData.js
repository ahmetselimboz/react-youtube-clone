import { createSlice } from "@reduxjs/toolkit";
import { searchAction } from "../actions/SearchData";

const initialState = {
  getSearch: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchAction.fulfilled, (state, action) => {
        state.loading = false;
        state.getSearch = action.payload;
      })
      .addCase(searchAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { getSearch } = searchSlice.actions;
export default searchSlice.reducer;
