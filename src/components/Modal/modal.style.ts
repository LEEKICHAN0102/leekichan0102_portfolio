import styled from "styled-components";
import { motion } from "framer-motion";
import { Section } from "../About/about.style";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const ModalHeader = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  margin-left: 30px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 24px;
  z-index: 101;
`;

export const ModalContent = styled(motion.div)`
  position: relative;
  background: white;
  padding: 100px;
  width: 100vw;
  height: 100%;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;
  background-color: black;
  color: white;
  opacity: 0.7;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  font-family: bold;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 28px;
`;

export const ModalSubTitle = styled(ModalTitle)`
  font-size: 20px;
`;

export const ModalDivider = styled.div`
  background-color: gray;
  width: 100%;
  height: 1px;
  margin: 35px 0px;
`;

export const ModalSection = styled(Section)`
  gap: 15px;

  font-weight: bold;
  font-size: 18px;

  p {
    color: black;
  }

  span {
    color: #ED3770;
  }

  a {
    color: #1D809F;
  }
`;