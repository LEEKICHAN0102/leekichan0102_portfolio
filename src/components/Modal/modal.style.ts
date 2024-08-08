// styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section } from "../About/about.style";

// for media query
import media from "../../midea";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
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

  ${media.pc`
    font-size: 36px;
  `}

  ${media.pc2`
    font-size: 42px;
  `}
`;

export const ModalContent = styled(motion.div)`
  position: relative;
  background: white;
  padding: 100px;
  width: 100vw;
  height: 100%;
  overflow-y: auto;

  padding: 5% 15%;
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
  font-family: bold;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  ${media.pc`
    top: 5%;
    right: 5%;
    width: 60px;
    height: 60px;
    font-size: 30px;
  `}

  ${media.pc2`
    top: 7%;
    right: 7%;
    width: 80px;
    height: 80px;
    font-size: 40px;
  `}
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 28px;

  ${media.pc`
    font-size: 36px;
  `}

  ${media.pc2`
    font-size: 42px;
  `}
`;

export const ModalSubTitle = styled(ModalTitle)`
  font-size: 24px;
  font-weight: bold;

  ${media.pc`
    font-size: 28px;
  `}

  ${media.pc2`
    font-size: 32px;
  `}
`;

export const ModalDivider = styled.div`
  background-color: gray;
  width: 100%;
  height: 3px;
  margin: 35px 0px;
`;

export const ModalSection = styled(Section)`
  gap: 20px;

  font-weight: 600;
  font-size: 16px;

  p {
    color: black;
  }

  span {
    color: #ED3770;
  }

  a {
    color: #1D809F;
  }

  ${media.pc`
    font-size: 24px;
    gap: 30px;
  `}

  ${media.pc2`
    font-size: 28px;
    gap: 40px;
  `}
`;