// libs
import styled from "styled-components";

// components
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Reading from "../components/Reading/Reading";
import Skill from "../components/Skill/Skill";
import Project from "../components/Project/Project";

function Home() {
  return(
    <>
      <HomeMain>
        <Header />
        <Reading id="intro" />
        <About id="about" />
        <Project id="projects" />
        <Skill id="skills" />
      </HomeMain>
    </>
  )
}

const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 150px;
  margin: 150px 0px;
`;

export default Home;
