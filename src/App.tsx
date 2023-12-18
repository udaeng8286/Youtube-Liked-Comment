// import { useState } from "react";
import styled from "styled-components";

import Mainpage from "./pages/Mainpage";
import "./App.css";

function App() {
  return (
    <Container>
      <Mainpage />
    </Container>
  );
}
export default App;

const Container = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
