import { useState, ChangeEvent } from "react";
import styled from "styled-components";

interface VideoLinkInputProps {
  onSearch: (link: string) => void;
}

const VideoLinkInput = ({ onSearch }: VideoLinkInputProps) => {
  const [videoLink, setVideoLink] = useState<string>("");

  const handleSearch = () => {
    onSearch(videoLink);
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
