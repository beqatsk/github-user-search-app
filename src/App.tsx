import styled from "styled-components";
import { useState } from "react";
import Header from "./componnets/Header";
import MainConatainer from "./componnets/MainConatiner";
function App() {
  const [background, setBackground] = useState<boolean>(false);
  return (
    <>
      <Container background={background}>
        <Header background={background} setBackground={setBackground} />
        <MainConatainer />
      </Container>
    </>
  );
}
const Container = styled.div<{ background: boolean }>`
  width: 375px;
  padding: 31px 24px;
  background-color: ${(props) => (props.background ? "#141d2f" : " #f6f8ff")};
`;

export default App;
