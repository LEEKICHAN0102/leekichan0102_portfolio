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
    width: 400px;
    height: 500px;
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
  height: auto;
`;

export const ImageSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #D0D1D3;
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  width: 35%;
  height: inherit;

  span {
    font-size: 20px;
    font-weight: bold;
    color: black;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: black;
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
  padding: 20px;
  gap: 50px;

  a {
    color: #1D809F;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: black;
  }

  span {
    font-size: inherit;
    font-weight: bold;
    color: #ED3770;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextTitle = styled(Text)``;

export const TextList = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: white;
`;

export const TableSection = styled.table`
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
`;

export const ItemButton = styled(motion.button)`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  outline: none;
`;