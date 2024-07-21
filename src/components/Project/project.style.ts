// libs
import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectMain = styled(motion.div)`
  width: 95%;
  height: auto;
  border-radius: 20px;
  background-color: #161B22;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  img {
    width: 300px;
    height: 400px;
    border-radius: 20px;
  }
`;

export const Text = styled(motion.span)`
  font-size: 24px;  
  font-weight: bold;
  color: white;
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
  gap: 5px;
`;

export const TextTitle = styled(Text)``;

export const TextList = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: white;
`;