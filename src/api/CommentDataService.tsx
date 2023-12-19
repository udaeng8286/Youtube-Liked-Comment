import axios from "axios";
import key from "./ApiKey";
import { YouTubeComment } from "../utility/type";
import extractVideoIdFromUrl from "./VideoUrl";

const getYoutubeComments = async (
  url: string
): Promise<YouTubeComment[] | null> => {
  try {
    const videoId = extractVideoIdFromUrl(url);

    if (!videoId) {
      throw new Error("유튜브 링크 재확인");
    }

    let comments: YouTubeComment[] = [];
    let nextPageToken: string | undefined = undefined;

    do {
      const response: any = await axios.get(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${key}&maxResults=100&pageToken=${
          nextPageToken || ""
        }`
      );

      const pageComments = response.data.items.map((comment: any) => ({
        author: comment.snippet.topLevelComment.snippet.authorDisplayName,
        text: comment.snippet.topLevelComment.snippet.textDisplay,
        publishedAt: comment.snippet.topLevelComment.snippet.publishedAt,
        likeCount: comment.snippet.topLevelComment.snippet.likeCount,
      }));

      comments = comments.concat(pageComments);
      nextPageToken = response.data.nextPageToken;
    } while (nextPageToken);

    console.log(comments);
    return comments;
  } catch (error) {
    console.error("Error fetching YouTube comments:", error);
    throw error;
  }
};

export default getYoutubeComments;
