import styled from "styled-components";
function MainConatainer() {
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
      pin: "/images/pin.png",
      pinTitle: "San Francisco",
      link: "/images/url.png",
      linkTitle: "https://github.blog",
      twitter: "/images/twitter.png",
      twiterTitle: "Not Available",
      office: "/images/office-building.png",
      officeTitle: "@github",
    },
  ];
  return (
    <>
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
            <AboutUser>
              <img src={item.pin} alt="pinImage" />
              <Pin>{item.pinTitle}</Pin>
            </AboutUser>
            <AboutUser>
              <img src={item.link} alt="linkImage" />
              <Pin>{item.linkTitle}</Pin>
            </AboutUser>
            <AboutUser>
              <img src={item.twitter} alt="twitterImage" />
              <Pin>{item.twiterTitle}</Pin>
            </AboutUser>
            <AboutUser>
              <img src={item.office} alt="officeImage" />
              <Pin>{item.officeTitle}</Pin>
            </AboutUser>
          </UserContainer>
        );
      })}
    </>
  );
}
export default MainConatainer;

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
const AboutUser = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
  margin-top: 17px;
`;
const Pin = styled.h2`
  font-size: 13px;
  font-weight: 400;
  color: #4b6a9b;
`;
