import { createSlice } from "@reduxjs/toolkit";
import { detailAction } from "../actions/DetailData";

const initialState = {
  getVideo: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(detailAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(detailAction.fulfilled, (state, action) => {
        state.loading = false;
        state.getVideo = action.payload;
      })
      .addCase(detailAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { getVideo } = detailSlice.actions;
export default detailSlice.reducer;
