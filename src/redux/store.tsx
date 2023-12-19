import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./VideoSlice";
import commentReducer from "./CommentSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage, // localStorage
  whiteList: ["video", "comment"],
};

const store = configureStore({
  reducer: {
    video: videoReducer,
    comment: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // useAppSelector
export type AppDispatch = typeof store.dispatch; // useAppDispatch

export default store;

// useAppSelector(리덕스에 작성한 변수 접근 조회), useAppDispatch(변수 업데이트)
