import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./numberSlice";

const appStore = configureStore({
  reducer: {
    number: numberReducer,
  },
});

export default appStore;
