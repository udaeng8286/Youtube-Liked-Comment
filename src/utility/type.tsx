export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
};

export type YouTubeComment = {
  author: string;
  likeCount: number;
  text: string;
  publishedAt: string;
};
