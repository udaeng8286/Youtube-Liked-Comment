import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YouTubeComment } from "../utility/type";

const initialState: YouTubeComment[] = [];

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<YouTubeComment[]>) =>
      state.concat(action.payload),
  },
});

export const { setComment } = commentSlice.actions;
export default commentSlice.reducer;

// () => {} -> return 명시 필요, void 타입(리턴값이 없는 함수)
// () => ... -> return값이 있는 함수라고 간주
