// libs
import styled from "styled-components";
import { motion } from "framer-motion";

// for media query
import media from "../../midea";

export const HeaderNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  height: 10vh;
  background-color: #161B22;
  padding: 0 50px;
  z-index: 10;
`;

export const HeaderLogo = styled.div`
  height: inherit;

  svg {
    width: 100%;
    height: 100%;
    padding: 10px;
  }

  cursor: pointer;
`;

export const HeaderList = styled.div`
  color: white;
  font-weight: bold;

  ul {
    display: flex;
    gap: 30px;
  }
  
  li {
    cursor: pointer;
  }

  ${media.pc`
    font-size: 28px;
  `}

  ${media.pc2`
    font-size: 36px;
  `}
`;


export const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background-color: red;
  transform-origin: 0%;
  z-index: 11;
  width: 100%;
`;