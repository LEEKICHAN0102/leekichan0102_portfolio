// libs
import styled from "styled-components";
import { motion } from "framer-motion";

// for media query
import media from "../../midea";

export const ProjectMain = styled(motion.div)`
  width: 95%;
  height: auto;
  border-radius: 20px;
  background-color: #161B22;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const Text = styled(motion.span)`
  font-size: 28px;
  font-weight: bold;
  color: white;

  ${media.pc`
      font-size: 36px;
  `}

  ${media.pc2`
      font-size: 50px;
  `}
`;

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

export const Profile = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: auto;
`;

export const ImageSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #D0D1D3;
  border-radius: 20px;
  padding: 2%;
  gap: 20px;
  width: 35%;
  height: inherit;
  
  img {
    width: 400px;
    height: 500px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: black;
    
    ${media.pc`
      font-size: 28px;
    `}

    ${media.pc2`
      font-size: 36px;
    `}
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: black;

    ${media.pc`
      font-size: 20px;
    `}

    ${media.pc2`
      font-size: 24px;
    `}
  }
`;

export const TextSectionDivider = styled.div`
  background-color: black;
  width: 100%;
  height: 2px;
`;

export const TextSection = styled(motion.div)`
  width: 55%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #D0D1D3;
  border-radius: 20px;
  padding: 2%;
  gap: 50px;

  a {
    color: #1D809F;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: black;

    ${media.pc`
      font-size: 20px;
    `}

    ${media.pc2`
      font-size: 24px;
    `}
  }

  span {
    font-size: inherit;
    font-weight: bold;
    color: #ED3770;
    
    ${media.pc`
      font-size: 20px;
    `}

    ${media.pc2`
      font-size: 24px;
    `}
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  ${media.pc`
    gap: 15px;
  `}

  ${media.pc2`
    gap: 20px;
  `}
`;

export const TextTitle = styled(Text)``;

export const TextList = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: white;
`;

export const TableSection = styled.section`
  display: grid;
  grid-template-rows: repeat(1, auto);
  align-items: center;
  gap: 20px;

  a {
    color: #1D809F;
    font-weight: bold;
  }
`;

export const TableItem = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  gap: 10px;

  ${media.pc`
    font-size: 20px;
  `}

  ${media.pc2`
    font-size: 24px;
  `}
`;

export const ItemButton = styled(motion.button)`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  outline: none;

  ${media.pc2`
    width: 170px;
    height: 60px;
    font-size: 20px;
  `}

  ${media.pc2`
    width: 200px;
    height: 70px;
    font-size: 22px;
  `}
`;