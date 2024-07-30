import { motion } from "framer-motion";
import styled from "styled-components";

export const ReadingMain = styled(motion.div)`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161B22;
  width: 95%;
  height: 95vh;
  border-radius: 10px;
  z-index: 1
`;

export const Glass = styled(motion.div)`
  position: absolute;
  background-color: white;
  opacity: 0.8;
  border-radius: 50%;
  border: 5px solid black;
  min-width: 500px;
  min-height: 500px;
  z-index: 2;
  cursor: grab;
  pointer-events: auto;

  @media screen and (min-width: ${props => props.theme.width.pc}) {
    width: 700px;
    height: 700px;
  }
`;

export const Text = styled(motion.div)`
  display: flex;
  flex-direction: column;
  z-index: 3;
  padding: 20px;
  font-size: 48px;
  font-weight: bold;
  gap: 30px;
  color: #161B22;
  pointer-events: none;

  @media screen and (min-width: ${props => props.theme.width.pc}) {
    font-size: 60px;
  }
`;