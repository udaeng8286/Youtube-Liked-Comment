import { useState } from "react";
import getYoutubeData from "../api/YoutubeDataService";
import getYoutubeComments from "../api/CommentDataService";
import { YouTubeVideo } from "../utility/type";
import { YouTubeComment } from "../utility/type";
import styled from "styled-components";
import likeIcon from "../../public/assets/like.svg";
const Search = () => {
  const [videoLink, setVideoLink] = useState<string>("");
  const [videoInfo, setVideoInfo] = useState<YouTubeVideo | null>(null);
  const [comments, setComments] = useState<YouTubeComment[] | null>(null);

  const handleSearch = async () => {
    const data = await getYoutubeData(videoLink);
    setVideoInfo(data);

    const commentsData = await getYoutubeComments(videoLink);
    setComments(commentsData);
  };

  function formatViews(views) {
    const formatter = new Intl.NumberFormat();
    return formatter.format(views);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }

  return (
    <Container>
      <Label>You can check out the recommended comments!</Label>
      <Section>
        <Input
          type="text"
          value={videoLink}
          placeholder="Enter Youtube Link"
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Section>

      {videoInfo && (
        <InfoContainer>
          <Thumbnail
            src={videoInfo.thumbnailUrl}
            alt={videoInfo.thumbnailUrl}
          />
          <VideoTitle>{videoInfo.title}</VideoTitle>
          <VideoInfo>
            <VideoInfoLeft>
              <Text>{formatViews(videoInfo.viewCount)}views</Text>
              <Text>{formatDate(videoInfo.publishedAt)}</Text>
            </VideoInfoLeft>
            <VideoInfoRight>
              <LikeIcon src={likeIcon} alt="like icon" />
              <Text>{videoInfo.likeCount}</Text>
            </VideoInfoRight>
          </VideoInfo>
        </InfoContainer>
      )}

      {comments && (
        <CommentsContainer>
          {comments
            .slice()
            .sort((a, b) => b.likeCount - a.likeCount)
            .map((comment, index) => (
              <CommentItem key={index}>
                <InfoItem>
                  <AuthorTime>
                    <Text>{comment.author}</Text>
                    <TimeText>{formatDate(comment.publishedAt)}</TimeText>
                  </AuthorTime>
                  <Text>{comment.text}</Text>
                  <Text>{formatViews(comment.likeCount)}</Text>
                </InfoItem>
              </CommentItem>
            ))}
        </CommentsContainer>
      )}
    </Container>
  );
};

export default Search;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.span`
  color: white;
  font-size: 32px;
`;

const Section = styled.div`
  height: 40px;
  display: flex;
  margin-top: 32px;
`;

const Input = styled.input`
  width: 560px;
  background-color: #181818;
  border: 2px solid #303030;
  color: #ffffff;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 0;
  &::placeholder {
    color: #aaaaaa;
  }
`;

const Button = styled.div`
  width: 64px;
  color: #ffff;
  background-color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.p`
  font-size: 24px;
  color: #ffff;
`;

const VideoInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VideoInfoLeft = styled.div`
  display: flex;
`;

const VideoInfoRight = styled.div`
  display: flex;
`;
const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorTime = styled.div`
  display: flex;
`;

const Text = styled.p`
  color: #ffff;
  margin-right: 8px;
`;

const TimeText = styled.p`
  color: #737373;
  margin-left: 8px;
`;

const LikeIcon = styled.img`
  width: 20px;
`;

const Thumbnail = styled.img``;

const CommentsContainer = styled.div``;

const CommentItem = styled.div`
  border: 2px solid #303030;
  display: flex;
  flex-direction: column;
`;
