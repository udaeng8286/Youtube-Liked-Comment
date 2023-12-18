import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./VideoSlice";

const store = configureStore({
  reducer: {
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // useAppSelector
export type AppDispatch = typeof store.dispatch; // useAppDispatch

export default store;
