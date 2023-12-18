import axios from "axios";
import key from "./ApiKey";
import { YouTubeVideo } from "../utility/type";
import extractVideoIdFromUrl from "./VideoUrl";

const getYoutubeData = async (url: string) => {
  console.log(key);
  try {
    const videoId = extractVideoIdFromUrl(url);

    if (!videoId) {
      throw new Error("Invalid YouTube video link");
    }

    const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${key}`;

    const response = await axios.get(youtubeApiUrl);

    const videoInfo = response.data.items[0]?.snippet;
    const videoStatistics = response.data.items[0]?.statistics;
    if (!videoInfo) {
      throw new Error("유튜브 링크 재확인");
    }

    const youTubeVideo: YouTubeVideo = {
      id: videoId,
      title: videoInfo.title,
      description: videoInfo.description,
      publishedAt: videoInfo.publishedAt,
      thumbnailUrl:
        videoInfo.thumbnails?.maxres?.url ||
        videoInfo.thumbnails?.hqdefault?.url ||
        "",
      viewCount: videoStatistics.viewCount || 0,
      likeCount: videoStatistics.likeCount || 0,
      commentCount: videoStatistics.commentCount || 0,
    };
    console.log(youTubeVideo);

    return youTubeVideo;
  } catch (error) {
    console.error("Error fetching YouTube video information:", error);
    return null;
  }
};

export default getYoutubeData;
