import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./VideoSlice";
import commentReducer from "./CommentSlice";

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
