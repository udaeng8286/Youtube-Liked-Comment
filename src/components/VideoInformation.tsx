import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { formatViews, formatDate } from "../utility/util";

import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const VideoInfo = () => {
  const thumbnailUrl = useAppSelector(
    (state: RootState) => state.video.thumbnailUrl
  );
  const title = useAppSelector((state: RootState) => state.video.title);
  const viewCount = useAppSelector((state: RootState) => state.video.viewCount);
  const publishedAt = useAppSelector(
    (state: RootState) => state.video.publishedAt
  );
  const likeCount = useAppSelector((state: RootState) => state.video.likeCount);

  return (
    <Container>
      <Thumbnail src={thumbnailUrl} alt={thumbnailUrl} />
      <VideoTitle>{title}</VideoTitle>
      <Section>
        <Left>
          <Text>{formatViews(viewCount)} views</Text>
          <Text>{formatDate(publishedAt)}</Text>
        </Left>
        <Right>
          <LikeIcon icon={faThumbsUp} />
          <Text>{likeCount}</Text>
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
  margin: 1em 0;
  font-size: 1.5em;
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
  margin-right: 0.5em;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const LikeIcon = styled(FontAwesomeIcon)`
  font-size: 1.3em;
  color: #ffff;
  margin-right: 0.5em;
`;
