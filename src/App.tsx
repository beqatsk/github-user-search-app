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
        <InputWrapper>
          <SearchImage></SearchImage>
          <Input placeholder="Search GitHub username…"></Input>
          <SearchButton>Search</SearchButton>
        </InputWrapper>
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
const InputWrapper = styled.div`
  position: relative;
`;
const SearchImage = styled.div`
  position: absolute;
  background-image: url(/images/search.png);
  width: 20px;
  height: 20px;
  left: 10px;
  top: 40px;
`;
const Input = styled.input`
  width: 100%;
  height: 60px;
  font-size: 18px;
  padding: 6.5px 7px 7.5px 16px;
  border-radius: 15px;
  padding: 6.5px 7px 7.5px 35px;
  border-radius: 15px;
  margin-top: 20px;
  &::placeholder {
    font-size: 13px;
    font-weight: normal;
    line-height: 1.92;
    color: #4b6a9b;
  }
`;
const SearchButton = styled.button`
  position: absolute;
  width: 84px;
  height: 46px;
  margin: 0 0 0 7px;
  padding: 12.5px 14px 12.5px 18px;
  border-radius: 10px;
  background-color: #0079ff;
  font-size: 14px;
  font-weight: bold;
  color: white;
  right: 10px;
  top: 28px;
  cursor: pointer;
`;

export default App;
