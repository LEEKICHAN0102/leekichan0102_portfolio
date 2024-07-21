import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillMain = styled(motion.section)`
  width: 95%;
  height: 95vh;
  border-radius: 20px;
  background-color: #262F38;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Text = styled(motion.span)`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const SkillTable = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SkillList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #D0D1D3;
  border-radius: 10px;
  height: 80vh;
  width: 30%;
  padding: 20px;
  gap: 20px;
`;

export const SkillClass = styled(Text)`
  color: black;
`;

export const HoverText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 120%;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 3px;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
  position: relative;

  img {
    width: 70px;
    height: 20px;
  }
`;

export const PercentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 5px;
  position: relative;

  &:hover ${HoverText} {
    opacity: 1;
  }
`;

export const PercentageBar = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background-color: #4caf50;
  border-radius: 5px;
`;

export const PercentageText = styled.span`
  right: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;
