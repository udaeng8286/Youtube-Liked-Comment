import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { YouTubeVideo } from "../utility/type";

const initialState: YouTubeVideo = {
  id: "",
  title: "",
  description: "",
  publishedAt: "",
  thumbnailUrl: "",
  viewCount: 0,
  likeCount: 0,
  commentCount: 0,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideo: (state, action: PayloadAction<YouTubeVideo>) => {
      const {
        id,
        title,
        description,
        publishedAt,
        thumbnailUrl,
        viewCount,
        likeCount,
        commentCount,
      } = action.payload;
      state.id = id;
      state.title = title;
      state.description = description;
      state.publishedAt = publishedAt;
      state.thumbnailUrl = thumbnailUrl;
      state.viewCount = viewCount;
      state.likeCount = likeCount;
      state.commentCount = commentCount;
    },
  },
});

export const { setVideo } = videoSlice.actions;
export default videoSlice.reducer;
