import { configureStore } from "@reduxjs/toolkit";
import  clientSlice  from "./client-reducer";

export default configureStore({
  reducer: {
    client:clientSlice,
  },
});
