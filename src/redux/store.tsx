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

// useSelector(리덕스에 작성한 변수 접근 조회), useDispatch(변수 업데이트)
