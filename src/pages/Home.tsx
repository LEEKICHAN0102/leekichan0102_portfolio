import styled from "styled-components";

// components
import Reading from "../components/Reading/Reading";
import Skill from "../components/Skill/Skill";

function Home() {
  return(
    <HomeMain>
      <Reading />
      <Skill />
    </HomeMain>
  )
}

const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  gap: 100px;
`;

export default Home;