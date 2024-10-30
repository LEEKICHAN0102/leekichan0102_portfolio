// hooks
import { useState } from "react";

// styles
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

// styles
import {
  ModalDivider,
  ModalTitle,
  ModalSection,
  ModalSubTitle,
} from "../Modal/modal.style";

// components
import Carousel from "../Carousel/Carousel";
import Modal from "../Modal/Modal";

interface NProps {
  name: string;
}

function ProjectItem ({ name }: NProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  if(name === "maplessakssak"){
    return(
      <Profile>
        <ImageSection
          variants={item}
        >
          <span>메싹싹</span>
          <Carousel 
            slides={[
              "/MapleSSakSSak/maple_ssakssak_equipment.png",
            ]}
          />
          <p>NEXON OPEN API를 사용한 인게임 UI 캐릭터 정보</p>
          <p>2024.10 개인 프로젝트</p>
        </ImageSection>
        <TextSection
          variants={item}
        >
          <Section>
            <p><span>메싹싹</span>은 NEXON OPEN API를 사용하여 캐릭터의 정보를 친숙한 인게임 UI로 확인할 수 있는 웹사이트 입니다.</p>
            <p><span>메이플스토리 인게임 플레이어들</span>을 위해 제작 되었으며 캐릭터의 기본 정보, 스탯, 장착 장비, 스킬 강화, 캐시 아이템등에 대한 정보를 확인할 수 있습니다.</p>
            <p>또한 인게임 내에서 확인하기 어려운 몇 가지 정보들 <span>(헥사 스탯, 심볼 관련 정보)</span>을 더욱 확인하기 편하게 보완해서 제작해보았습니다.</p>
          </Section>
          <Section>
            <p>아직은 확인할 수 없는 부족한 정보들을 추가적으로 업데이트 해나갈 예정입니다. (유니온 점령 효과, 아티팩트 효과, 길드원 조회 등)</p>
          </Section>
          <TextSectionDivider />
          <TableSection>
            <TableItem>
              ▶ GitHub: <a href="https://github.com/LEEKICHAN0102/nexon_maple" target="_blank">nexon_maple-ssak-ssak</a>
            </TableItem>
            <TableItem>▶ 주 기능: 검색한 캐릭터의 정보(스탯, 장비, 스킬, 캐시)를 인게임 UI와 유사한 형태로 확인 가능</TableItem>
            <TableItem>▶ FrontEnd: Next.JS, TypeScript, React-query, moduleCSS, zustand</TableItem>
            <TableItem>▶ Deployment: Vercel</TableItem>
            <TableItem>▶ 개발 후기: <a href="https://velog.io/@rlcks01537/NEXON-OPEN-API%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%EB%A9%94%EC%9D%B4%ED%94%8C%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%9D%B8%EA%B2%8C%EC%9E%84-UI-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0" target="_blank">메싹싹 개발 후기</a></TableItem>
            <TableItem>
              <ItemButton onClick={() => setIsModalOpen(true)}>▶ More Detail</ItemButton>
            </TableItem>
          </TableSection>
        </TextSection>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalTitle>메싹싹</ModalTitle>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>🔗 Deployment URL</ModalSubTitle>
            <a href="https://nexon-maple-ssakssak.vercel.app/" target="_blank">메싹싹</a>
            <ModalSubTitle>GitHub SourceCode</ModalSubTitle>
            <a href="https://github.com/LEEKICHAN0102/nexon_maple" target="_blank">nexon_maple-ssak-ssak</a>
          </ModalSection>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>🎨 Over View</ModalSubTitle>
            <p>메싹싹은 NEXON OPEN API를 사용한 <span>메이플스토리를 플레이하는 유저</span>들을 위한 캐릭터 정보 조회 사이트 입니다.</p>
            <p>많은 사람들이 사용 중인 <span>환산 주스탯, 메이플.GG</span> 와 같은 사이트들이 이미 존재하지만 인게임 UI를 사용하여 만들어본다면 현재 플레이하는 유저의 입장에서 정보를 확인하기 좀 더 용이하지 않을까? 라는 생각에서 개발을 진행하게 되었습니다.</p>
            <p>또한 인게임에서도 다른 사람의 정보를 확인하기 어려운 부분이 존재 하였는데 <span>(헥사 스탯, 심볼 장착 정보)</span>등을 좀 더 직관적으로 확인할 수 있도록 개선 시켜보았습니다.</p>
          </ModalSection>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>😀 What I've Learned ?</ModalSubTitle>
            <p>팀 프로젝트를 진행하며 바쁘게 지내다 최근에 들어서 잠시 소강상태에 들어갔습니다. 팀원 분들의 현업이 바쁘다 보니 기존 출시 계획에서 벗어나게 되면서 시간이 약간 붕뜨게 되어 다른 할 것을 찾게 되었습니다. </p>
            <p>개인 프로젝트를 진행하지 않은지 시간이 오래 지난 것 같다는 생각이 들었고 비용이 들지 않고 할 수 있는 프로젝트를 찾던 중 NEXON에서 제공하는 <a href="https://openapi.nexon.com/ko/" target="_blank">OPEN API</a>를 찾게 되었습니다. </p>
            <p>NEXON 에서 제공하는 여러가지 게임의 OPEN API가 있었는데 평소에 제가 하는 게임인 <span>메이플스토리</span>에 관한 정보를 확인하게 되었고, 기존 유저의 입장에서 바라보며 작업을 한다면 좀 더 개선할 수 있겠다는 생각을 하여 프로젝트를 진행하게 되었습니다.</p>
            <p>공부가 주 목적이었기 때문에 평소 자주 사용하지 않았던 <span>Next.Js</span> 와 프로젝트에 적용해보지 않았던 전역 상태관리 라이브러리인 <span>zustand</span>를 프로젝트에 적용하여 보았습니다. </p>
            <p>하나의 페이지에서 여러가지 정보요청을 핸들링 하기 위해 전역 상태관리가 필수적이 었는데, <span>zustand</span>를 최대한 활용할 수 있던 점이 가장 좋았던 것 같습니다. 또한 불필요한 코드를 최소화 하기 위해 고민하면서 재사용과 타입 상속을 통해 많이 부족하지만 개인적으로 꽤나 만족스러운 코드가 완성 되었다고 생각합니다.</p>
            <p>디자인은 <span>인게임 UI</span>를 최대한 활용하여 현재 플레이 중인 유저들에게 친숙한 느낌을 주고자 하였습니다. <span>moduleCSS</span>를 이용하였는데 작업을 진행할 수록 예외적으로 처리해주어야 할 부분이 많아서 <span>styled-components</span> 를 사용하는게 좋았을 것 같다고 생각하였습니다. 😅 </p>
            <p><span>메싹싹</span>은 계속해서 주기적인 업데이트를 통해 현재는 확인할 수 없는 여러가지 정보<span>(유니온 점령 효과, 아티팩트 효과, 길드원 정보등)</span>등을 업데이트 해나갈 예정입니다. </p>
          </ModalSection>
          <ModalDivider />
        </Modal>
      </Profile>
    )
  }
  
  if(name === "suldaksuldak"){
    return(
      <Profile>
        <ImageSection
          variants={item}
        >
          <span>술닥술닥</span>
          <Carousel 
            slides={[
              "/SuldakSuldak/suldaksuldak_Main.png",
              "/SuldakSuldak/suldaksuldak_Team.jpg",
            ]}
          />
          <p>술 애호가들을 위한 정보 커뮤니티</p>
          <p>2024.06~中 팀 프로젝트</p>
        </ImageSection>
        <TextSection
          variants={item}
        >
          <Section>
            <p><span>술닥술닥</span>은 팀과 동시에 프로젝트의 이름이기도 합니다.</p>
            <p><span>술을 좋아하는 사람들을 위한 프로젝트</span>이며 나만의 취향에 맞는 술을 추천받기, 함께 술과 이야기를 나눌 친구를 찾을 수 있습니다!</p>
            <p>현재 술닥술닥은 총 10명의 인원으로 이루어져 있으며 주기적인 온, 오프라인 회의와 내부 QA를 통해 정식 출시를 위해 개개인이 맡은 역할을 수행해나가고 있습니다.</p>
          </Section>
          <Section>
            <p>담당 파트 - <span>백오피스</span></p>
            <p>술닥술닥 백오피스를 통해 웹에서 보이게 될 콘텐츠를 서버에 보내 저장하는 역할을 합니다. 술, 태그, 배너, 모임 등의 정보를 에디터로 CRUD, 사용자와 관리자의 계정을 관리합니다.</p>
          </Section>
          <TextSectionDivider />
          <TableSection>
            <TableItem>
              ▶ GitHub: Private yet!
            </TableItem>
            <TableItem>▶ 주 기능: 웹 콘텐츠 CRUD, 사용자 계정 관리</TableItem>
            <TableItem>▶ FrontEnd: React, TypeScript, React-query, styled-component, Jotai</TableItem>
            <TableItem>▶ Marketing: <a href="https://www.instagram.com/suldak.official/" target="_blank">술닥술닥 인스타그램</a></TableItem>
            <TableItem>
              <ItemButton onClick={() => setIsModalOpen(true)}>▶ More Detail</ItemButton>
            </TableItem>
          </TableSection>
        </TextSection>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalTitle>술닥술닥</ModalTitle>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>GitHub SourceCode</ModalSubTitle>
            <a href="https://github.com/suldak/" target="_blank">https://github.com/suldak</a>
            <p>↪ 아직 Private 인 상태 입니다! 😪</p>
          </ModalSection>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>🎨 Over View</ModalSubTitle>
            <p>술닥술닥은 술을 좋아하는 술 애호가들을 위한 정보와 모임을 주도할 수 있는 커뮤니티 웹 사이트입니다.</p>
            <p>제가 맡은 부분은 백오피스이며 웹에서 보이게 될 여러 가지 콘텐츠를 서버에 저장하고 사용자와 관리자 계정을 관리하는 역할을 합니다.</p>
            <p>프로젝트 도중에 참여하여 기존의 코드를 파악한 후 작업하였으며 여러 Custom Hooks를 사용하여 코드 재사용을 용이하게 하고 리팩토링하였습니다.</p>
          </ModalSection>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>😀 What I've Learned ?</ModalSubTitle>
            <p>개인 프로젝트를 완료한 이후 저에게 부족한 것이 무엇인지 생각해 보니, <span>팀 프로젝트 경험</span>이 부족하다는 것이었습니다. </p>
            <p>첫 개인 프로젝트를 마무리 한 이후 팀 프로젝트에 참여한 적이 있습니다. 약 한 달간의 기간을 잡고 시작하였던 프로젝트였으나, 프로젝트가 예상과는 다르게 장기화하면서 시작한 지 두 달째 되던 즈음 유야무야 끝나버렸습니다. 여러 가지 문제가 있었지만 가장 큰 문제는 소통의 부재였습니다.</p>
            <p>
              상황을 타개하려고 어떠한 행동도 취하지 않고 그저 흘러가듯 가만히 있던 저 또한 문제였습니다.
              소통이 안 돼서 불편한 점이 많았는데 <span>소통을 주도하려는 노력</span>을 적극적으로 하여야 했으나 팀 내에서 객관적으로
              실력이 가장 떨어졌던 제가 뭔가 건의하는 것이 <span>불쾌한 인상</span>을 남기지는 않을까? 혼자 위축 되어있었던 기억이 납니다.
            </p>
            <p>
              이후 개인 프로젝트를 한번 진행하며 실력을 좀 더 쌓은 뒤, 팀 프로젝트 경험을 쌓기 위해 모집 공고들을 확인하던 중 술닥술닥을 보게 되었고, 현 업에 계신 분들이 많이 계셨던 점과 주마다 <span>온라인 회의</span>, 달마다 <span>오프라인 정기 회의</span>를 한다는 점에서 많은 것을 배울 수 있을 것 같다고 생각을 하였습니다.
              하여 위 작성된 저의 구구절절한 사연을 가득 작성하여 많은 것을 배우고 싶다는 참여 의사를 밝혔습니다.
            </p>
            <p>
              정말 감사하게도 관심을 가져주셔서 간단한 커피챗을 하며 몇 가지 기술 질문 이후 결과적으로 팀에 합류하게 되었습니다.
              현재는 술닥술닥의 <span>백오피스</span> 파트를 맡아 작업하고 있으며 팀원분들과 주기적인 회의와 소통으로 11월 말까지 프로젝트 완성을 위해 작업을 진행 중입니다. 😀
            </p>
          </ModalSection>
          <ModalDivider />
        </Modal>
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
              "/PokéHub/PokéHub_Detail.png",
              "/PokéHub/PokéHub_Description.png",
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
            <p><span>PokéHub</span>는 포켓몬스터 관련 정보들을 확인할 수 있는 <span>도감 형식</span>으로 제작한 웹사이트 프로젝트입니다.</p>
            <p>이전에 진행하였던 <a href="https://github.com/LEEKICHAN0102/pookimon" target="_blank">프로젝트(Pookimon)</a>의 아쉬웠던 점을 보완하기 위하여 제작하였으며, 여러 가지 부분에서 개선되었습니다.</p>
            <p>크게 게임 내의 포켓몬 정보, 도구, 인물<span>(체육관 관장, 사천왕, 챔피언 등)</span>들에 관한 정보와
            <a href="https://pokemonkorea.co.kr/news" target="_blank"> 포켓몬 코리아</a>에서 제공되는 관련 이벤트, 사용자 간의 커뮤니케이션이 가능한 게시판 탭 등으로 나뉘어져 있습니다.</p>
          </Section>
          <Section>
            <p>프론트와 백엔드를 코드를 분할하여 유지보수를 용이하게 하였습니다.</p>
            <p>효율적인 데이터 관리를 위해 React-query를 사용하여 데이터를 병렬 처리하는 Custom Hooks를 만들었습니다.</p>
            <p>Express를 사용하여 서버를 구축하고, MongoDB를 사용하여 인물정보 데이터베이스 생성, 사용자 정보를 저장하여 관리합니다.</p>
          </Section>
          <TextSectionDivider />
          <TableSection>
            <TableItem>
            ▶ GitHub: <a href="https://github.com/LEEKICHAN0102/pokehub_front" target="_blank">PokéHub_FE</a> |
                <a href="https://github.com/LEEKICHAN0102/pokehub_back" target="_blank">PokéHub_BE</a>
            </TableItem>
            <TableItem>▶ 주 기능: 인게임 정보 확인, 게시판 커뮤니티, 이벤트 뉴스 웹 스크래핑</TableItem>
            <TableItem>▶ FrontEnd: React, React-query, styled-component</TableItem>
            <TableItem>▶ BackEnd: Node.js, Express, express-session, MongoDB, mongoose, puppeteer</TableItem>
            <TableItem>▶ Deployment: Vercel, EC2, S3, Route53, pm2(process manager) </TableItem>
            <TableItem>▶ 개발 후기: <a href="https://velog.io/@rlcks01537/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90v2-FE" target="_blank">PokéHub_FE 개발 후기</a> |
            <a href="https://velog.io/@rlcks01537/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90v2-BE" target="_blank">PokéHub_BE 개발 후기</a></TableItem>
            <TableItem>
              <ItemButton onClick={() => setIsModalOpen(true)}>▶ More Detail</ItemButton>
            </TableItem>
          </TableSection>
        </TextSection>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalTitle>PokéHub</ModalTitle>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>🔗 Deployment URL</ModalSubTitle>
            <a href="https://pokehub-encyclopedia.vercel.app/" target="_blank">https://pokehub-encyclopedia.vercel.app/</a>
            <p>↪ AWS EC2로 배포한 BE 서버가 프리티어 기간이 끝나면서 비용 문제로 인해 중지하게 되면서 사용할 수 있는 콘텐츠가 제한적이게 되었습니다. 불편하시겠지만 로컬에서 실행해 주시면 감사드리겠습니다. 😪
            </p>
            <ModalSubTitle>GitHub SourceCode</ModalSubTitle>
            <a href="https://github.com/LEEKICHAN0102/pokehub_front/tree/main" target="_blank">프론트엔드 코드</a>
            <a href="https://github.com/LEEKICHAN0102/pokehub_back/tree/main" target="_blank">백엔드 코드</a>
          </ModalSection>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>🎨 Over View</ModalSubTitle>
            <p><span>PokéHub</span> 프로젝트는 이전에 진행하였던 프로젝트인 <span>Pookimon</span>에서의 아쉬웠던 점을 보완하여 새롭게 진행한 프로젝트입니다.</p>
            <p>가장 큰 차이점으로는 실제 사용자가 CRUD 할 수 있는 인터페이스를 구축하였고, MongoDB를 활용하여 새로운 데이터베이스를 구축하면서 기존에 확인할 수 있던 정보에서 더 많은 정보를 확인할 수 있도록 하였습니다.</p>
            <p>효율적인 데이터 관리를 위해 react-query의 useQueries 훅을 사용해 데이터를 병렬적으로 처리하는 Custom hooks를 만들었습니다.</p>
            <p>새로운 방식을 사용하는 것이 도움이 될 것 같아 무한 스크롤이 아닌 Pagination을 적용하였으며, <a href="https://pokemonkorea.co.kr/news" target="_blank">포켓몬 코리아</a>의 웹 스크래핑을 통해 포켓몬에 관련 된 여러 가지 이벤트들을 사용자가 확인 할 수 있도록 하였습니다.</p>
          </ModalSection>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>😀 What I've Learned ?</ModalSubTitle>
            <p>이전 프로젝트인 <span>Pookimon</span>에서 개인적인 아쉬움이 많이 남았습니다. 프로젝트를 만들고 완성한 것까지는 만족스러웠지만, 실제 사용자가 사용하기에 여러 가지 제약이 있다고 생각 하였습니다.</p>
            <p>도감이라는 컨셉에 맞지 않게 확인할 수 있는 콘텐츠가 제약적인 것, 실제 사용자가 CRUD를 할 수 있는 환경이 아니라는 점, 좋지 않은 사용경험을 남길 수 있는 것 등의 여러 가지 아쉬운 점이 있었습니다.</p>
            <p><span>Pookimon</span>을 완성하고 <span>PokéHub</span>를 시작하기까지의 사이에 혼자 몇몇개의 토이 프로젝트와 학습 그리고 도중에 있었던 팀 프로젝트 등을 경험하면서 지금이라면 더 나은 프로젝트를 만들 수 있겠다고 생각하였습니다.</p>
            <p>배포, DB, 상태관리 등 정말 많은 것을 배울 수 있었지만, 전부 작성하면 내용이 과도하게 길어지기 때문에 <a href="https://velog.io/@rlcks01537/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90v2-FE" target="_blank">개발 후기</a>를 확인 해주시면 감사드리겠습니다. 😀</p>
          </ModalSection>
          <ModalDivider />
        </Modal>
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
            <p> <a href="https://pokeapi.co/" target="_blank">PokéAPI</a>의 오픈 API를 데이터 fetching 하여 가져온 콘텐츠를 화면에 출력하는 <span>도감 형식</span>으로 제작 된 프로젝트 입니다. 인게임 포켓몬 정보, 도구에 관한 정보를 확인할 수 있습니다.</p>
          </Section>
          <Section>
            <p>React-intersection-observer 를 사용하여 스크롤을 하며 데이터를 요청하여 콘텐츠를 화면에 출력하는 무한 스크롤을 구현 하였습니다.</p>
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
              <ItemButton onClick={() => setIsModalOpen(true)}>▶ More Detail</ItemButton>
            </TableItem>
          </TableSection>
        </TextSection>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalTitle>Pookimon</ModalTitle>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>🔗 Deployment URL</ModalSubTitle>
            <a href="https://fullfeet-pookimon.netlify.app/" target="_blank">https://fullfeet-pookimon.netlify.app</a>
          </ModalSection>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>🎨 Over View</ModalSubTitle>
            <p><a href="https://pokeapi.co/#google_vignette" target="_blank">PokéAPI</a> RESTful API를 활용하여 프로젝트를 만들었습니다.</p>
            <p>포켓몬과 같은 콘텐츠를 좋아하기도 하고, <span>RESTful API</span>를 적극 활용하기에 알맞은 많은 정보와 데이터 구조라는 생각이 들어 개발하게 되었습니다.</p>
            <p>React에 아직 익숙하지 않았기에 연습을 위해 사용하였습니다. Axios를 통해 데이터를 요청하고 가져온 데이터를 상태에 저장한 뒤, 컴포넌트 내에서 출력합니다. </p>
            <p>react-intersection-observer 라이브러리를 사용하여 무한 스크롤을 구현, 스크롤을 통해 추가적인 정보를 확인할 수 있습니다. tailwind CSS를 사용하여 반응형 디자인하였고, 콘텐츠의 상세한 정보를 Modal 창에서 출력하기 위해 tailwind 친화적인 flowbite-react를 사용하여 구현하였습니다. </p>
          </ModalSection>
          <ModalDivider />
          <ModalSection>
            <ModalSubTitle>😀 What I've Learned ?</ModalSubTitle>
            <p><span>Pookimon 프로젝트</span>는 제가 코딩공부를 시작한 이후 맨 처음 자체적으로 만든 프로젝트입니다. </p>
            <p>많은 사람들이 그러듯 사이트를 통해 강의를 결제하여 수강하면서 듣던 중, 직접 고민하면서 작성하는 것이 아니라 알려주는 것을 그대로 작성하다 보니 코딩 실력이 아니라 영문 타이핑만 빨라지는 것 같다는 생각이 들었습니다. </p>
            <p>직접 내 것으로 만들려면 따라 만드는 게 아니라 방법을 배운 뒤 내가 만들고 싶은 것을 하는 것이 좋겠다는 생각이 들었고 <span>Pookimon</span>을 만들게 되었습니다만, 프로젝트 자체는 사실 <span>좋은 코드라고 볼 수 없는 수준입니다.</span> </p>
            <p>우선 프로젝트를 구성하기 전 기획의 단계를 거치지 않아 과정에서 시간을 많이 소모하였고, 상태관리에 관해서도 몰랐기에 하나의 Hooks 안에서 모든 것을 처리하는 등의 코드를 작성하였습니다. 결과적으로 필요한 콘텐츠를 보는 데 매우 오랜 시간이 걸리면서 사용자에게 좋지 않은 사용경험을 남길 수 있는 프로젝트가 되고 말았습니다.</p>
            <p>그럼에도 굳이 포트폴리오에 작성하게 된 이유는 <span>"나도 나만의 프로젝트를 만들 수 있구나!"</span>라는 자신감을 가질 수 있는 중요한 경험을 하게 해준, 저에게 있어 고마운 프로젝트이기 때문입니다.</p>
            <p>특별한 기능은 없으나 당시의 저에게는 정말 산 넘어 산 같은 문제를 하나씩 해결해 가면서 프로젝트를 만든 기억이 납니다. 결과적으로 <span>성능 개선</span> 보다는 <span>동작</span>이 우선시 된 프로젝트가 되기는 했지만, 문제가 생겼을 때 해결을 위해 고민하는 과정에 대한 즐거움을 알게 되었습니다.</p>
          </ModalSection>
          <ModalDivider />
        </Modal>
      </Profile>
    )
  }
}

export default ProjectItem;