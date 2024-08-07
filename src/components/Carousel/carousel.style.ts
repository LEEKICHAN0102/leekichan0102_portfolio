// libs
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled components
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  width: 400px;
  height: 500px;
  margin: auto;
  overflow: hidden;
`;

export const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
`;

export const SlideCount = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: gray;
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

export const Button = styled.button<{ $left?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: black;
  opacity: 0.5;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  ${(props) => props.$left ? 'left: 10px;' : 'right: 10px;'}
`;