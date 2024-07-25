import styled from "styled-components";
import { motion } from "framer-motion";

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

  @media screen and (min-width: ${props => props.theme.width.pc}) {
    font-size: 24px;
  }
`;

export const Circle = styled(motion.span)`
  position: absolute;
  width: 40px;
  height: 1px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
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