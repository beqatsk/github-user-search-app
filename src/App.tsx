import styled from "styled-components";
import Header from "./componnets/Header";
import MainConatainer from "./componnets/MainConatiner";
function App() {
  return (
    <>
      <Container>
        <Header />
        <MainConatainer />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 375px;
  padding: 31px 24px;
  background-color: #f6f8ff;
`;

export default App;
