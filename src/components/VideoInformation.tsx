import styled from "styled-components";
import likeIcon from "../../public/assets/like.svg";
import { YouTubeVideo } from "../utility/type";

interface VideoInfoProps {
  videoInfo: YouTubeVideo;
  formatViews: (views: number) => string;
  formatDate: (dateString: string) => string;
}

const VideoInfo = ({ videoInfo, formatViews, formatDate }: VideoInfoProps) => {
  return (
    <Container>
      <Thumbnail src={videoInfo.thumbnailUrl} alt={videoInfo.thumbnailUrl} />
      <VideoTitle>{videoInfo.title}</VideoTitle>
      <Section>
        <Left>
          <Text>{formatViews(videoInfo.viewCount)} views</Text>
          <Text>{formatDate(videoInfo.publishedAt)}</Text>
        </Left>
        <Right>
          <LikeIcon src={likeIcon} alt="like icon" />
          <Text>{videoInfo.likeCount}</Text>
        </Right>
      </Section>
    </Container>
  );
};

export default VideoInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.img``;

const VideoTitle = styled.p`
  margin: 12px 0px;
  font-size: 24px;
  color: #ffff;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
`;

const Text = styled.p`
  color: #ffff;
  margin-right: 8px;
`;

const Right = styled.div`
  display: flex;
`;

const LikeIcon = styled.img`
  width: 20px;
  margin-right: 8px;
`;
