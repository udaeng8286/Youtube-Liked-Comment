import VideoLinkInput from "../components/VideoLinkInput";
import VideoInformation from "../components/VideoInformation";
import Comments from "../components/Comments";
import styled from "styled-components";

import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const Mainpage = () => {
  const viewCount = useAppSelector((state: RootState) => state.video.viewCount);
  const comments = useAppSelector((state: RootState) => state.comment);

  return (
    <Container>
      <Guide>You can check out the recommended comments!</Guide>
      <VideoLinkInput />
      <VideoInfoContainer>
        {viewCount > 0 ? <VideoInformation /> : null}
        {comments.length !== 0 ? <Comments /> : null}
      </VideoInfoContainer>
    </Container>
  );
};

export default Mainpage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Guide = styled.span`
  color: white;
  font-size: 2em;
`;

const VideoInfoContainer = styled.div`
  margin-top: 4%;
  width: 100%;
`;
