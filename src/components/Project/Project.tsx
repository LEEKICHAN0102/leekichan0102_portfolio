// styles
import { 
  ProjectMain,
  ProjectBox,
  Text,
} from "./project.style";

// components
import ProjectItem from "./ProjectItem";

interface PProps {
  id: string;
}

function Project ({id}: PProps) {
  return(
    <ProjectMain id={id}>
      <Text>Projects</Text>
      <ProjectBox>
        <ProjectItem name="maplessakssak" />
        <ProjectItem name="suldaksuldak" />
        <ProjectItem name="pokehub" />
        <ProjectItem name="pookimon" />
      </ProjectBox>
    </ProjectMain>
  )
}

export default Project;