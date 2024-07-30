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
        <SkillList variants={item}>
          <SkillClass>FrontEnd</SkillClass>
          <SkillItem 
            itemImage="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"
            percentage={80}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"
            percentage={80}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=000080"
            percentage={80}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=000080"
            percentage={70}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=000080"
            percentage={80}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Next.Js-000000?style=flat-square&logo=Next.Js&logoColor=white"
            percentage={60}
            proficiency="learning"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"
            percentage={70}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Reactquery-FF4154?style=flat-square&logo=React-query&logoColor=white"
            percentage={70}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
            percentage={60}
            proficiency="learning"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/React HF-EC5990?style=flat-square&logo=ReactHookForm&logoColor=white"
            percentage={70}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/StyledC-DB7093?style=flat-square&logo=Styledcomponents&logoColor=white"
            percentage={80}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/tailwind-06B6D4?style=flat-square&logo=tailwindCss&logoColor=white"
            percentage={65}
            proficiency="learning"
          />
        </SkillList>
        <SkillList variants={item}>
          <SkillClass>BackEnd</SkillClass>
          <SkillItem 
            itemImage="https://img.shields.io/badge/Node.Js-5FA04E?style=flat-square&logo=Node.Js&logoColor=white"
            percentage={70}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"
            percentage={60}
            proficiency="learning"
          />
          <SkillClass>Database</SkillClass>
          <SkillItem 
            itemImage="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"
            percentage={60}
            proficiency="learning"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=Mongoose&logoColor=white"
            percentage={60}
            proficiency="learning"
          />
          <SkillClass>Deployment</SkillClass>
          <SkillItem 
            itemImage="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat-square&logo=Amazon-EC2&logoColor=white"
            percentage={50}
            proficiency="learning"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=Amazon-S3&logoColor=white"
            percentage={50}
            proficiency="learning"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/AmazonR53-8C4FFF?style=flat-square&logo=Amazon-Route-53&logoColor=white"
            percentage={50}
            proficiency="learning"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"
            percentage={60}
            proficiency="learning"
          />
        </SkillList>
        <SkillList variants={item}>
          <SkillClass>Version Control</SkillClass>
          <SkillItem 
            itemImage="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"
            percentage={80}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"
            percentage={80}
            proficiency="familiar"
          />
          <SkillClass>Communication</SkillClass>
          <SkillItem 
            itemImage="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"
            percentage={70}
            proficiency="familiar"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"
            percentage={60}
            proficiency="learning"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"
            percentage={50}
            proficiency="learning"
          />
          <SkillItem 
            itemImage="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"
            percentage={70}
            proficiency="familiar"
          />
        </SkillList>
      </SkillTable>
    </SkillMain>
  );
}

export default Skill;
