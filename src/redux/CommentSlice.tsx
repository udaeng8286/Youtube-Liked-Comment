import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YouTubeComment } from "../utility/type";

const initialState: YouTubeComment[] = [
  {
    author: "",
    likeCount: 0,
    text: "",
    publishedAt: "",
  },
];

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<YouTubeComment>) => {
      state.push(action.payload);
    },
  },
});

export const { setComment } = commentSlice.actions;
export default commentSlice.reducer;
