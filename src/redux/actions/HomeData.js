import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const homeAction = createAsyncThunk(
  'home/getVideos',
  async (data,  { rejectWithValue }) => {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        part: "id,snippet",
        q:data,
        maxResults: "50",
      },
   
      headers: {
        "x-rapidapi-key": "b0dbddb898msh8b4622a1b9035f7p19ff60jsne02760de4c57",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      return response.data.items; // Bu, action.payload olarak dönecektir
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
