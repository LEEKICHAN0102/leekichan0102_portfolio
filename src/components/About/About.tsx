import { 
  AboutMain,
  ImageSection,
  Profile,
  Section,
  TextList,
  TextTitle,
  TextSection,
  Text,
} from "./about.style";

function About() {
  return(
    <AboutMain>
      <Text>About Me</Text>
      <Profile>
        <ImageSection>
          <img src="/LEEKICHAN_profile.png" alt="프로필 이미지" />
          <Section>
            <span>상상하는 것을 좋아하고</span>
            <span>상상을 실현시키는 과정을 즐기는</span>
            <span>주니어 프론트엔드 개발자 이기찬 입니다.</span>
          </Section>
        </ImageSection>
        <TextSection>
          <Text>Introduce.</Text>
          <Section>
            <TextTitle>저는 ( ______ ) 개발자입니다.</TextTitle>
            <TextList>1. 사람들과의 소통을 좋아하는</TextList>
            <TextList>2. 제가 하는 일에 대해 더 많이 배우고 싶은</TextList>
            <TextList>3. 좋은 코드란 무엇인지 고민하고 적용하기 위해 노력하는</TextList>
          </Section>
          <Section>
            <TextTitle>저는 ( ______ ) 할 수 있습니다.</TextTitle>
            <TextList>1. 웹 브라우저의 동작과 렌더링에 대한 기본적인 이해를</TextList>
            <TextList>2. Restful API를 구성하고 서버의 데이터를 주고받아 컨텐츠에 연결</TextList>
            <TextList>3. 웹 개발을 시작(無)부터 끝(배포)까지 해본 경험이 있으며 전반적인 사이클을 이해</TextList>
            <TextList>4. github-flow 전략을 이용하여 팀원과의 원활한 협업을</TextList>
          </Section>
          <Section>
            <TextTitle>저는 앞으로 ( ______ ) 개발자가 되고 싶습니다.</TextTitle>
            <TextList>1. 상황에 맞는 전략을  사용하여 팀원과의 원활한 협업을 할 수 있는</TextList>
            <TextList>2. 웹 표준과 접근성을 준수하며  개발하여 좋은 사용 경험을 남길 수 있는 웹</TextList>
          </Section>
        </TextSection>
      </Profile>
    </AboutMain>
  )
}

export default About;