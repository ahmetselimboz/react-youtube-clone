import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const detailAction = createAsyncThunk(
  "detail/getVideo",
  async (id, { rejectWithValue }) => {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/videos",
      params: {
        part: "contentDetails,snippet,statistics",
        id: id,
      },
      headers: {
        "x-rapidapi-key": "b0dbddb898msh8b4622a1b9035f7p19ff60jsne02760de4c57",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      return response.data.items
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
