import styled from "styled-components";
import { YouTubeComment } from "../utility/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
interface CommentsProps {
  comments: YouTubeComment[];
  formatViews: (views: number) => string;
  formatDate: (dateString: string) => string;
}

const Comments = ({ comments, formatViews, formatDate }: CommentsProps) => {
  // HTML 태그를 제거하는 함수
  const removeHTMLTags = (text: string) => {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <OuterContainer>
      <Container>
        {comments
          .slice()
          .sort((a, b) => b.likeCount - a.likeCount)
          .map((comment, index) => (
            <CommentItem key={index}>
              <AuthorTime>
                <Text>{comment.author}</Text>
                <TimeText>{formatDate(comment.publishedAt)}</TimeText>
              </AuthorTime>
              <Text
                dangerouslySetInnerHTML={{
                  __html: removeHTMLTags(comment.text),
                }}
              />
              <Like>
                <LikeIcon icon={faThumbsUp} />
                <Text>{formatViews(comment.likeCount)}</Text>
              </Like>
            </CommentItem>
          ))}
      </Container>
    </OuterContainer>
  );
};

export default Comments;

const OuterContainer = styled.div`
  border-top: 2px solid #303030;
  margin-top: 2%;
`;

const Container = styled.div`
  width: 100%;
`;

const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4%;
`;

const AuthorTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
`;

const LikeIcon = styled(FontAwesomeIcon)`
  font-size: 1.3em;
  color: #ffff;
  margin-right: 0.5em;
`;

const Text = styled.p`
  color: #ffff;
  margin: 1% 0;
`;

const TimeText = styled.p`
  color: #737373;
  margin-left: 0.5em;
`;
