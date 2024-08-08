// libs
import styled from "styled-components";
import { motion } from "framer-motion";

// for media query
import media from "../../midea";

export const SkillMain = styled(motion.section)`
  width: 95%;
  height: auto;
  border-radius: 20px;
  background-color: #262F38;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Text = styled(motion.span)`
  font-size: 24px;
  font-weight: bold;
  color: white;

  ${media.pc`
    font-size: 36px;
  `}

  ${media.pc2`
    font-size: 50px;
  `}
`;

export const SkillTable = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  ${media.pc`
    gap: 40px;
  `}

  ${media.pc2`
    gap: 50px;
  `}
`;

export const SkillList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: auto;
  gap: 30px;
  height: auto;

  ${media.pc`
    gap: 40px;
  `}

  ${media.pc2`
    gap: 50px;
  `}
`;

export const SkillItemContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const HoverText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 120%;
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  width: 250px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;

  ${media.pc`
    width: 300px;
    height: 150px;
    font-size: 20px;
  `}

  ${media.pc2`
    width: 400px;
    height: 200px;
    font-size: 24px;
  `}
`;

export const SkillIcon = styled.div`
  width: 70px;
  height: 70px;

  ${media.pc`
    width: 100px;
    height: 100px;
  `}

  ${media.pc2`
    width: 130px;
    height: 130px;
  `}

  img {
    width: 100%;
    height: 100%;
  }

  &:hover ${HoverText} {
    opacity: 1;
  }
`;

export const SkillClass = styled(Text)`
  color: white;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
  position: relative;
`;