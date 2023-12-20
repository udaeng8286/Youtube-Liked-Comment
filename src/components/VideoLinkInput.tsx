import { useState, ChangeEvent } from "react";
import styled from "styled-components";
import getYoutubeData from "../api/YoutubeDataService";
import getYoutubeComments from "../api/CommentDataService";
import { useAppDispatch } from "../redux/hooks";
import { AppDispatch } from "../redux/store";
import { setVideo } from "../redux/VideoSlice";
import { setComment } from "../redux/CommentSlice";

const VideoLinkInput = () => {
  const [videoLink, setVideoLink] = useState<string>("");

  const dispatch: AppDispatch = useAppDispatch();

  const handleSearch = async () => {
    const videoData = await getYoutubeData(videoLink);
    dispatch(setVideo(videoData));

    const commentData = await getYoutubeComments(videoLink);
    if (commentData !== null) {
      dispatch(setComment(commentData));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoLink(e.target.value);
  };

  return (
    <Section>
      <Input
        type="text"
        value={videoLink}
        placeholder="Enter Youtube Link"
        onChange={handleChange}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Section>
  );
};

export default VideoLinkInput;

const Section = styled.div`
  height: 2.5em;
  display: flex;
  margin-top: 2em;
`;

const Input = styled.input`
  width: 40vw;
  background-color: #181818;
  border: 2px solid #303030;
  color: #ffffff;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 0;
  &::placeholder {
    color: #aaaaaa;
  }
`;

const Button = styled.button`
  width: 4em;
  color: #ffff;
  background-color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
