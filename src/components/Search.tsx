import styled from "styled-components";

const Search = () => {
  return (
    <Container>
      <Label>You can check out the recommended comments!</Label>
      <Section>
        <Input type="text" placeholder="Enter YouTube Link" />
        <Button>Search</Button>
      </Section>
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
