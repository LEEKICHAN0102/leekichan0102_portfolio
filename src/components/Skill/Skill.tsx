// libs
import { useRef } from "react";
import { useInView } from "framer-motion";

// styles
import {
  SkillMain,
  Text,
  SkillTable,
  SkillList,
  SkillClass,
  SkillItemContainer,
} from "./skill.style";

// components
import SkillItem from "./SkillItem";

interface SProps {
  id: string;
}

function Skill({id}: SProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <SkillMain
      id={id}
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Text 
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s 0.4s"
        }}
      >
        Skills
      </Text>
      <SkillTable>
        <SkillClass>FrontEnd</SkillClass>
        <SkillList variants={item}>
          <SkillItemContainer>
            <SkillItem
              itemImage="/Skill/front/HTML.svg"
              proficiency="시멘틱 태그를 적절하게 구분하여 사용할 수 있도록 공부하고 있습니다."
            />
            <SkillItem
              itemImage="/Skill/front/CSS.svg"
              proficiency="CSS를 사용하여 기본적인 퍼블리싱을 수행할 수 있습니다."
            />
            <SkillItem
              itemImage="/Skill/front/JavaScript.svg"
              proficiency="JavaScript의 기본 동작 원리를 이해하고 있습니다."
            />
            <SkillItem
              itemImage="/Skill/front/TypeScript.svg"
              proficiency="TypeScript를 사용하여 타입을 지정하고 코드를 작성할 수 있습니다."
            />
            <SkillItem
              itemImage="/Skill/front/React.svg"
              proficiency="React의 기본적인 Hooks를 이해하고 사용할 수 있습니다."
            />
            <SkillItem
              itemImage="/Skill/front/NextJS-Light.svg"
              proficiency="Next.js 14의 App Router를 학습하고 있습니다."
            />
            <SkillItem
              itemImage="/Skill/front/StyledComponents.svg"
              proficiency="Styled-components를 사용하여 기본적인 퍼블리싱 및 반응형 디자인을 구현할 수 있습니다."
            />
            <SkillItem
              itemImage="/Skill/front/TailwindCSS-Dark.svg"
              proficiency="TailwindCSS를 사용하여 기본적인 퍼블리싱 및 반응형 디자인을 구현할 수 있습니다."
            />
          </SkillItemContainer>
        </SkillList>
        <SkillClass>Deployment & ETC</SkillClass>
        <SkillList variants={item}>
          <SkillItemContainer>
            <SkillItem
              itemImage="/Skill/deployment/AWS-Light.svg"
              proficiency="AWS EC2 인스턴스를 사용하여 서버를 배포한 경험이 있습니다."
            />
            <SkillItem
              itemImage="/Skill/deployment/Vercel-Light.svg"
              proficiency="Vercel을 사용하여 토이 프로젝트들을 배포한 경험이 있습니다."
            />
            <SkillItem
              itemImage="/Skill/etc/Figma.svg"
              proficiency="팀 프로젝트 협업 과정에서 Figma를 사용한 경험이 있습니다."
            />
            <SkillItem
              itemImage="/Skill/etc/Git.svg"
              proficiency="Git의 기본적인 사용법을 알고 있습니다."
            />
            <SkillItem
              itemImage="/Skill/etc/Github-Dark.svg"
              proficiency="GitHub 원격 저장소를 사용하여 소스 코드를 관리할 수 있습니다."
            />
          </SkillItemContainer>
        </SkillList>
        <SkillClass>BackEnd & DB</SkillClass>
        <SkillList variants={item}>
          <SkillItemContainer>
            <SkillItem
              itemImage="/Skill/back/NodeJS.svg"
              proficiency="Node.js 환경에서 프로젝트를 진행한 경험이 있습니다."
            />
            <SkillItem
              itemImage="/Skill/back/ExpressJS-Dark.svg"
              proficiency="Express를 사용하여 백엔드 서버를 구축한 경험이 있습니다."
            />
            <SkillItem
              itemImage="/Skill/db/MongoDB.svg"
              proficiency="MongoDB를 사용하여 데이터베이스를 구축하고 프로젝트에 활용한 경험이 있습니다."
            />
          </SkillItemContainer>
        </SkillList>
      </SkillTable>
    </SkillMain>
  );
}

export default Skill;
