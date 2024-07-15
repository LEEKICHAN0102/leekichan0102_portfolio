import styled from "styled-components";

// components
import Reading from "../components/Reading/Reading";
import Skill from "../components/Skill/Skill";

function Home() {
  return(
    <HomeMain>
      <Reading />
      <Skill />
      {/* <Project /> */}
      {/* <Contact /> */}
    </HomeMain>
  )
}

const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 150px;
  margin-top: 100px;
`;

export default Home;