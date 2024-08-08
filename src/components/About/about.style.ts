// libs
import styled from "styled-components";
import { motion } from "framer-motion";

// for media query
import media from "../../midea";

export const AboutMain = styled(motion.div)`
  width: 95%;
  height: 100vh;
  border-radius: 20px;
  background-color: #161B22;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;

    ${media.pc`
      width: 500px;
      height: 500px;
    `}

    ${media.pc2`
      width: 700px;
      height: 700px;
    `}
  }
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

export const Profile = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const ImageSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #262F38;
  border-radius: 20px;
  padding: 20px;
  gap: 30px;
  width: 35%;
  height: inherit;

  span {
    font-size: 20px;
    font-weight: bold;
    color: white;
    
    ${media.pc`
      font-size: 28px;
    `}

    ${media.pc2`
      font-size: 36px;
    `}
  }
`;

export const TextSection = styled(motion.div)`
  width: 55%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  background-color: #262F38;
  border-radius: 20px;
  padding: 20px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;

  ${media.pc`
    gap: 12px;
  `}

  ${media.pc2`
    gap: 20px;
  `}
`;

export const TextTitle = styled(Text)``;

export const TextList = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: white;

  ${media.pc`
    font-size: 24px;
  `}

  ${media.pc2`
    font-size: 30px;
  `}
`;