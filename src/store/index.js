import { configureStore } from "@reduxjs/toolkit";
import searchButtonReducer from "./searchButton";

const store = configureStore({
  reducer: {
    searchButton: searchButtonReducer,
  },
});

export default store;
