import styled from "styled-components";
import { useState, useEffect } from "react";
import User from "./types/user";
function App() {
  const [background, setBackground] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<number>(200);
  const [userName, setUserName] = useState<string>("octocat");
  const handleClick = () => {
    setBackground(!background);
  };
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUser(data);
      setStatus(response.status);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Container background={background}>
        <HeaderWrapper>
          <HeaderH1 background={background}>devfinder</HeaderH1>
          <HeaderTitle>
            <HeaderTitleH2 background={background}>
              {background ? "LIGHT" : "DARK"}
            </HeaderTitleH2>
            <HeaderTitleImg background={background} onClick={handleClick} />
          </HeaderTitle>
        </HeaderWrapper>
        <InputWrapper>
          <SearchImage></SearchImage>
          <Input
            value={userName}
            placeholder="Search GitHub username…"
            background={background}
            onChange={(event) => setUserName(event.target.value)}
          ></Input>
          <SearchButton onClick={getUser}>Search</SearchButton>
          {status !== 200 && <p style={{ color: "red" }}>Not Found</p>}
        </InputWrapper>

        <UserContainer background={background}>
          <UserTitle>
            <img
              src={user?.avatar_url}
              alt="userimg"
              style={{ width: "100px", height: "100px", borderRadius: "50px" }}
            />
            <UserInfo>
              <UserName background={background}>{user?.name}</UserName>
              <UserData background={background}>{user?.created_at}</UserData>
            </UserInfo>
          </UserTitle>
          <UserText background={background}>{user?.bio}</UserText>
          <ActiveCard background={background}>
            <ActiveWrapper>
              <Repos background={background}>Repos</Repos>
              <ReposCount background={background}>
                {user?.public_repos}
              </ReposCount>
            </ActiveWrapper>
            <ActiveWrapper>
              <Repos background={background}>Followers</Repos>
              <ReposCount background={background}>{user?.followers}</ReposCount>
            </ActiveWrapper>
            <ActiveWrapper>
              <Repos background={background}>Following</Repos>
              <ReposCount background={background}>{user?.following}</ReposCount>
            </ActiveWrapper>
          </ActiveCard>
          <AboutUser>
            <img
              src={background ? "/images/pin-white.png" : "/images/pin.png"}
              alt="pinImage"
            />
            <Pin background={background}>{user?.location}</Pin>
          </AboutUser>
          <AboutUser>
            <img
              src={background ? "/images/url-white.png" : "/images/url.png"}
              alt="linkImage"
            />
            <Pin background={background}>{user?.blog}</Pin>
          </AboutUser>
          <AboutUser>
            <img src={"/images/twitter.png"} alt="twitterImage" />
            <TwiterText background={background}>Not Available</TwiterText>
          </AboutUser>
          <AboutUser>
            <img
              src={
                background
                  ? "/images/office-building-white.png"
                  : "/images/office-building.png"
              }
              alt="officeImage"
            />
            <Pin background={background}>{user?.company}</Pin>
          </AboutUser>
        </UserContainer>
      </Container>
    </>
  );
}
const Container = styled.div<{ background: boolean }>`
  width: 375px;
  padding: 31px 24px;
  background-color: ${(props) => (props.background ? "#141d2f" : " #f6f8ff")};
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderH1 = styled.h1<{ background: boolean }>`
  font-size: 26px;
  font-weight: 700;
  color: ${(props) => (props.background ? "white" : "#222731")};
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const HeaderTitleH2 = styled.h2<{ background: boolean }>`
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2.5px;
  color: ${(props) => (props.background ? "white" : "#4b6a9b")};
`;
const HeaderTitleImg = styled.div<{ background: boolean }>`
  background-image: ${(props) =>
    props.background ? `url(/images/sun.png)` : `url(/images/moon.png)`};
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
const Input = styled.input<{ background: boolean }>`
  width: 100%;
  height: 60px;
  font-size: 18px;
  padding: 6.5px 7px 7.5px 16px;
  border-radius: 15px;
  padding: 6.5px 7px 7.5px 35px;
  border-radius: 15px;
  margin-top: 20px;
  color: ${(props) => (props.background ? "white" : "black")};
  background-color: ${(props) => (props.background ? "#1e2a47" : "#fefefe")};
  &::placeholder {
    font-size: 13px;
    font-weight: normal;
    line-height: 1.92;
    color: ${(props) => (props.background ? "white" : "#4b6a9b")};
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
////
const UserContainer = styled.div<{ background: boolean }>`
  width: 327px;
  padding: 32px 24px 48px;
  border-radius: 15px;
  margin: 16px 0 0;
  box-shadow: 0 16px 30px -10px rgba(70, 96, 187, 0.2);
  background-color: ${(props) => (props.background ? "#1e2a47" : "#fefefe")};
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
const UserName = styled.h2<{ background: boolean }>`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props.background ? "white" : "#2b3442")};
`;
const UserData = styled.span<{ background: boolean }>`
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => (props.background ? "white" : "#697c9a")};
`;
const UserText = styled.p<{ background: boolean }>`
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => (props.background ? "white" : "#4b6a9b")};
  line-height: 1.92;
  margin: 33px 0 23px;
`;
const ActiveCard = styled.h3<{ background: boolean }>`
  width: 279px;
  margin: 23px 0 24px;
  padding: 18px 14px 19px 15px;
  border-radius: 10px;
  background-color: ${(props) => (props.background ? "#141d2f" : "#f6f8ff")};
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
const Repos = styled.h2<{ background: boolean }>`
  font-size: 11px;
  font-weight: 400;
  color: ${(props) => (props.background ? "white" : "#4b6a9b")};
`;
const ReposCount = styled.h2<{ background: boolean }>`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.background ? "white" : "#4b6a9b")};
`;
const AboutUser = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
  margin-top: 17px;
`;
const Pin = styled.h2<{ background: boolean }>`
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => (props.background ? "white" : "#4b6a9b")};
`;
const TwiterText = styled(Pin)`
  color: #b5c0cd;
`;
export default App;
