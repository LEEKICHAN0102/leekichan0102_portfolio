import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillMain = styled(motion.section)`
  width: 90%;
  height: 90vh;
  border-radius: 20px;
  background-color: #262F38;
`;

export const SkillTable = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SkillList = styled(motion.div)`
  background-color: wheat;
  border-radius: 10px;
  height: 80vh;
  width: 30%;
`;