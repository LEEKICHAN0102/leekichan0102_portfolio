import {
  Profile,
  Section,
  ImageSection,
  ItemButton,
  TextSection,
  TextSectionDivider,
  TableSection,
  TableItem,
} from "./project.style";

// components
import Carousel from "../Carousel/Carousel";

interface NProps {
  name: string;
}

function ProjectItem ({ name }: NProps) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  if(name === "suldaksuldak"){
    return(
      <Profile>
        <ImageSection
          variants={item}
        >
          <span>술닥술닥</span>
          <Carousel 
            slides={[
              "/suldaksuldak_Main.png",
              "suldaksuldak_Team.jpg",
            ]}
          />
          <p>술 러버들을 위한 정보 커뮤니티</p>
          <p>2024.06~中 팀 프로젝트</p>
        </ImageSection>
        <TextSection
          variants={item}
        >
          <Section>
            <p><span>술닥술닥</span>은 팀과 동시에 프로젝트의 이름이기도 합니다.</p>
            <p><span>술을 좋아하는 사람들을 위한 프로젝트</span>이며 나만의 취향에 맞는 술을 추천 받기, 함께 술과 이야기를 나눌 친구를 찾을 수 있습니다!</p>
            <p>현재 술닥술닥은 총 10명의 인원으로 이루어져 있으며 주기적인 온,오프라인 회의를 통해 실제 출시를 위해 개개인이 맡은 역할을 수행해나가고 있습니다.</p>
          </Section>
          <Section>
            <p>담당 파트 - <span>백오피스</span></p>
            <p>술닥술닥 백오피스를 통해 웹에서 보여지게 될 컨텐츠를 서버에 보내 저장하는 역할을 합니다. 술, 태그, 배너, 모임 등의 정보를 에디터를 통해 CRUD, 유저와 관리자의 계정을 관리합니다.</p>
          </Section>
          <TextSectionDivider />
          <TableSection>
            <TableItem>
              ▶ GitHub: Private yet!
            </TableItem>
            <TableItem>▶ 주 기능: 웹 컨텐츠 CRUD, 사용자 계정 관리</TableItem>
            <TableItem>▶ FrontEnd: React, React-query, styled-component, Jotai</TableItem>
            <TableItem>▶ Marketing: <a href="https://www.instagram.com/suldak.official/" target="_blank">술닥술닥 인스타그램</a></TableItem>
            <TableItem>
              <ItemButton onClick={() =>alert("ㅎㅇ")}>▶ More Detail</ItemButton>
            </TableItem>
          </TableSection>
        </TextSection>
      </Profile>
    )
  }


  if(name === "pokehub"){
    return(
      <Profile>
        <ImageSection
          variants={item}
        >
          <span>PokéHub</span>
          <Carousel 
            slides={[
              "/PokéHub/PokéHub_Character.png",
              "/PokéHub/PokéHub_Pokemon.png",
              "/PokéHub/PokéHub_Item.png",
              "/PokéHub/PokéHub_Event.png",
            ]}
          />
          <p>포켓몬 관련 정보 | 커뮤니티 사이트</p>
          <p>2024.01~02 개인 프로젝트</p>
        </ImageSection>
        <TextSection
          variants={item}
        >
          <Section>
            <p><span>PokéHub</span>는 포켓몬스터 관련 정보들을 확인할 수 있는 <span>도감 형식</span>으로 제작한 웹사이트 프로젝트 입니다.</p>
            <p>이전에 진행하였던 <a href="https://github.com/LEEKICHAN0102/pookimon" target="_blank">프로젝트(Pookimon)</a>의 아쉬웠던 점을 보완하기 위하여 제작하였으며, 여러가지 부분에서 개선 되었습니다.</p>
            <p>크게 인게임 포켓몬 정보, 도구, 인물<span>(체육관 관장, 사천왕, 챔피언 등)</span>들에 관한 정보와
            <a href="https://pokemonkorea.co.kr/news" target="_blank"> 포켓몬 코리아</a>에서 제공 되는 관련 이벤트, 유저간의 커뮤니케이션이 가능한 게시판 탭등으로 나뉘어져 있습니다.</p>
          </Section>
          <Section>
            <p>프론트와 백엔드를 코드를 분할하여 유지보수를 용이하게 하였습니다.</p>
            <p>효율적인 데이터 관리를 위해 React-query를 사용하여 데이터를 병렬 처리하는 Custom Hooks를 만들었습니다.</p>
            <p>Express를 사용하여 서버를 구축하고, MongoDB를 사용하여 인물정보 데이터베이스 생성, 유저 정보를 저장하여 관리합니다.</p>
          </Section>
          <TextSectionDivider />
          <TableSection>
            <TableItem>
            ▶ GitHub: <a href="https://github.com/LEEKICHAN0102/pokehub_front" target="_blank">PokéHub_FE</a> |
                <a href="https://github.com/LEEKICHAN0102/pokehub_back" target="_blank">PokéHub_BE</a>
            </TableItem>
            <TableItem>▶ 주 기능: 인게임 정보 확인, 게시판 커뮤니티, 이벤트 뉴스 웹 스크래핑</TableItem>
            <TableItem>▶ FrontEnd: React, React-query, styled-component</TableItem>
            <TableItem>▶ BackEnd: Node.js, Express, MongoDB, mongoose, puppeteer</TableItem>
            <TableItem>▶ Deployment: Vercel, EC2, S3, Route53, pm2(process manager) </TableItem>
            <TableItem>▶ 개발 후기: <a href="https://velog.io/@rlcks01537/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90v2-FE" target="_blank">PokéHub_FE 개발 후기</a> |
            <a href="https://velog.io/@rlcks01537/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90v2-BE" target="_blank">PokéHub_BE 개발 후기</a></TableItem>
            <TableItem>
              <ItemButton onClick={() =>alert("ㅎㅇ")}>▶ More Detail</ItemButton>
            </TableItem>
          </TableSection>
        </TextSection>
      </Profile>
    )
  }

  if(name === "pookimon"){
    return(
      <Profile>
        <ImageSection
          variants={item}
        >
          <span>Pookimon</span>
          <Carousel 
            slides={[
              "/Pookimon/Pookimon_Modal.png",
              "/Pookimon/Pookimon_Pokemon.png",
              "/Pookimon/Pookimon_Toggle.png",
              "/Pookimon/Pookimon_Responsive.png",
            ]}
          />
          <p>포켓몬 도감형식의 웹사이트</p>
          <p>2023.08 개인 프로젝트</p>
        </ImageSection>
        <TextSection
          variants={item}
        >
          <Section>
            <p><span>Pookimon</span>은 저의 첫 번째 개인 프로젝트입니다.</p>
            <p> <a href="https://pokeapi.co/" target="_blank">PokéAPI</a>의 오픈 API를 데이터 fetching 하여 가져온 컨텐츠를 화면에 출력하는 <span>도감 형식</span>으로 제작 된 프로젝트 입니다. 인게임 포켓몬 정보, 도구에 관한 정보를 확인할 수 있습니다.</p>
          </Section>
          <Section>
            <p>React-intersection-observer 를 사용하여 스크롤을 하며 데이터를 요청하여 컨텐츠를 화면에 출력하는 무한 스크롤을 구현 하였습니다.</p>
            <p>tailwindCss를 사용하여 반응형 디자인 하였습니다.</p>
            <p>tailwindCss에 최적화 된 React-flowbite를 사용하여 Modal 창을 구현하였습니다.</p>
          </Section>
          <TextSectionDivider />
          <TableSection>
            <TableItem>
            ▶ GitHub: <a href="https://github.com/LEEKICHAN0102/pookimon" target="_blank">Pookimon</a>
            </TableItem>
            <TableItem>▶ 주 기능: 인게임 정보 확인, 무한 스크롤, 반응형 디자인</TableItem>
            <TableItem>▶ FrontEnd: React, React-query, React-intersection-observer, React-flowbite, tailwindCss</TableItem>
            <TableItem>▶ Deployment: netlify </TableItem>
            <TableItem>▶ 개발 후기: <a href="https://velog.io/@rlcks01537/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90" target="_blank">Pookimon 개발 후기_1</a> |
            <a href="https://velog.io/@rlcks01537/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90-2" target="_blank">Pookimon 개발 후기_2</a> |
            <a href="https://velog.io/@rlcks01537/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90-3" target="_blank">Pookimon 개발 후기_3</a>
            </TableItem>
            <TableItem>
              <ItemButton onClick={() =>alert("ㅎㅇ")}>▶ More Detail</ItemButton>
            </TableItem>
          </TableSection>
        </TextSection>
      </Profile>
    )
  }
}

export default ProjectItem;