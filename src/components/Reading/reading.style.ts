import { motion } from "framer-motion";
import styled from "styled-components";

export const ReadingMain = styled(motion.div)`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161B22; /* Set to desired background color */
  width: 1060px;
  height: 600px;
  border-radius: 10px;
  z-index: 1
`;

export const Glass = styled(motion.div)`
  position: absolute;
  background-color: white;
  opacity: 0.8;
  border-radius: 50%;
  border: 5px solid black;
  width: 500px;
  height: 500px;
  z-index: 2;
  cursor: grab;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  padding: 20px;
  font-size: 48px;
  font-weight: bold;
  gap: 30px;
  color: #161B22;
`;