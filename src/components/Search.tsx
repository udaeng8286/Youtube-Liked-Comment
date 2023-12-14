import { useState } from "react";
import getYoutubeData from "../api/YoutubeDataService";
import getYoutubeComments from "../api/CommentDataService";
import { YouTubeVideo } from "../utility/type";
import { YouTubeComment } from "../utility/type";
import styled from "styled-components";

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
          <Text>{videoInfo.publishedAt}</Text>
          <Text>{videoInfo.likeCount}</Text>
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
                  <Title>Author:</Title>
                  <Text>{comment.author}</Text>
                </InfoItem>
                <InfoItem>
                  <Title>likeCount:</Title>
                  <Text>{comment.likeCount}</Text>
                </InfoItem>
                <InfoItem>
                  <Title>Text:</Title>
                  <Text>{comment.text}</Text>
                </InfoItem>
                <InfoItem>
                  <Title>Published At:</Title>
                  <Text>{comment.publishedAt}</Text>
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
const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const Text = styled.p`
  color: #ffff;
`;

const Thumbnail = styled.img``;

const CommentsContainer = styled.div``;

const CommentItem = styled.div`
  border-color: purple;
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
`;
