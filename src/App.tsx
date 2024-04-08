import styled from "styled-components";

function App() {
  const profile = [
    {
      id: 1,
      url: "/images/user-img.png",
      name: "beqa tskhvediani",
      date: "joined 12 Jan 2020",
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
      repos: 8,
      followers: 3938,
      following: 9,
    },
  ];
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

        {profile.map((item) => {
          return (
            <UserContainer key={item.id}>
              <UserTitle>
                <img src={item.url} alt="userimg" />
                <UserInfo>
                  <UserName>{item.name}</UserName>
                  <UserData>{item.date}</UserData>
                </UserInfo>
              </UserTitle>
              <UserText>{item.title}</UserText>
              <ActiveCard>
                <ActiveWrapper>
                  <Repos>Repos</Repos>
                  <ReposCount>{item.repos}</ReposCount>
                </ActiveWrapper>
                <ActiveWrapper>
                  <Repos>Followers</Repos>
                  <ReposCount>{item.followers}</ReposCount>
                </ActiveWrapper>
                <ActiveWrapper>
                  <Repos>Following</Repos>
                  <ReposCount>{item.following}</ReposCount>
                </ActiveWrapper>
              </ActiveCard>
            </UserContainer>
          );
        })}
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
const UserContainer = styled.div`
  width: 327px;
  padding: 32px 24px 48px;
  border-radius: 15px;
  margin: 16px 0 0;
  box-shadow: 0 16px 30px -10px rgba(70, 96, 187, 0.2);
  background-color: #fefefe;
`;
const UserTitle = styled.div`
  display: flex;
  justify-content: start;
  gap: 19px;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const UserName = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #2b3442;
`;
const UserData = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: #697c9a;
`;
const UserText = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #4b6a9b;
  line-height: 1.92;
  margin: 33px 0 23px;
`;
const ActiveCard = styled.h3`
  width: 279px;
  margin: 23px 0 24px;
  padding: 18px 14px 19px 15px;
  border-radius: 10px;
  background-color: #f6f8ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ActiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
const Repos = styled.h2`
  font-size: 11px;
  font-weight: 400;
  color: #4b6a9b;
`;
const ReposCount = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #2b3442;
`;

export default App;
