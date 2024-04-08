import styled from "styled-components";

function App() {
  return (
    <>
      <Container>
        <HeaderWrapper>
          <HeaderH1>devfinder</HeaderH1>
          <HeaderTitle>
            <HeaderTitleH2>DARK</HeaderTitleH2>
            <HeaderTitleImg></HeaderTitleImg>
          </HeaderTitle>
        </HeaderWrapper>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 375px;
  padding: 31px 24px 79px;
  background-color: #f6f8ff;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderH1 = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #222731;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const HeaderTitleH2 = styled.h2`
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2.5px;
  color: #4b6a9b;
`;
const HeaderTitleImg = styled.div`
  background-image: url(/images/moon.png);
  width: 20px;
  height: 20px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

export default App;
