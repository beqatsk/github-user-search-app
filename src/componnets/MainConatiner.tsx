import styled from "styled-components";
function MainConatainer({ background }: { background: boolean }) {
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
      pinTitle: "San Francisco",
      linkTitle: "https://github.blog",
      twitter: "/images/twitter.png",
      twiterTitle: "Not Available",
      officeTitle: "@github",
    },
  ];
  return (
    <>
      {profile.map((item) => {
        return (
          <UserContainer key={item.id} background={background}>
            <UserTitle>
              <img src={item.url} alt="userimg" />
              <UserInfo>
                <UserName background={background}>{item.name}</UserName>
                <UserData background={background}>{item.date}</UserData>
              </UserInfo>
            </UserTitle>
            <UserText background={background}>{item.title}</UserText>
            <ActiveCard background={background}>
              <ActiveWrapper>
                <Repos background={background}>Repos</Repos>
                <ReposCount background={background}>{item.repos}</ReposCount>
              </ActiveWrapper>
              <ActiveWrapper>
                <Repos background={background}>Followers</Repos>
                <ReposCount background={background}>
                  {item.followers}
                </ReposCount>
              </ActiveWrapper>
              <ActiveWrapper>
                <Repos background={background}>Following</Repos>
                <ReposCount background={background}>
                  {item.following}
                </ReposCount>
              </ActiveWrapper>
            </ActiveCard>
            <AboutUser>
              <img
                src={background ? "/images/pin-white.png" : "/images/pin.png"}
                alt="pinImage"
              />
              <Pin background={background}>{item.pinTitle}</Pin>
            </AboutUser>
            <AboutUser>
              <img
                src={background ? "/images/url-white.png" : "/images/url.png"}
                alt="linkImage"
              />
              <Pin background={background}>{item.linkTitle}</Pin>
            </AboutUser>
            <AboutUser>
              <img src={item.twitter} alt="twitterImage" />
              <TwiterText background={background}>
                {item.twiterTitle}
              </TwiterText>
              {/* <Pin background={background}>{item.twiterTitle}</Pin> */}
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
              <Pin background={background}>{item.officeTitle}</Pin>
            </AboutUser>
          </UserContainer>
        );
      })}
    </>
  );
}
export default MainConatainer;

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
  color: #4b6a9b;
`;
