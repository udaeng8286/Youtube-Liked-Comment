// import { useState } from "react";
import styled from "styled-components";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <Container>
      <Search />
    </Container>
  );
}
export default App;

const Container = styled.div`
  width: 768px;
  height: 100vh;
`;
