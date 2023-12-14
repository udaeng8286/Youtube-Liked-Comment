const extractVideoIdFromUrl = (url: string): string | null => {
  try {
    const urlObject = new URL(url);

    if (
      urlObject.hostname === "www.youtube.com" ||
      urlObject.hostname === "youtube.com"
    ) {
      const searchParams = urlObject.searchParams;
      const videoId = searchParams.get("v");

      if (videoId) {
        return videoId;
      }
    } else if (urlObject.hostname === "youtu.be") {
      const videoId = urlObject.pathname.substr(1);

      if (videoId) {
        return videoId;
      }
    }

    throw new Error("Invalid YouTube video link");
  } catch (error) {
    console.error("Error extracting YouTube video ID:", error);
    return null;
  }
};

export default extractVideoIdFromUrl;
