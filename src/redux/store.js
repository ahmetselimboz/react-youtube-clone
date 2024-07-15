import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducers/HomeData";
import DetailData from "./reducers/DetailData";
import SearchData from "./reducers/SearchData";


const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: DetailData,
    search: SearchData,
  },

});

export default store;