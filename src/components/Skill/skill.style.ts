// libs
import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillMain = styled(motion.section)`
  width: 95%;
  height: auto;
  border-radius: 20px;
  background-color: #262F38;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Text = styled(motion.span)`
  font-size: 24px;
  font-weight: bold;
  color: white;

  @media screen and (min-width: ${props => props.theme.width.pc}) {
    font-size: 36px;
  }
`;

export const SkillTable = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const SkillList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: auto;
  gap: 30px;
  height: auto;

  @media screen and (min-width: ${props => props.theme.width.pc}) {
    gap: 30px;
  }
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
`;

export const SkillIcon = styled.div`
  width: 70px;
  height: 70px;

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