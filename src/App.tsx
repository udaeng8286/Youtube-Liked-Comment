// import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Mainpage from "./pages/Mainpage";
import "./App.css";

function App() {
  return (
    <Container>
      <Header />
      <Mainpage />
    </Container>
  );
}
export default App;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
