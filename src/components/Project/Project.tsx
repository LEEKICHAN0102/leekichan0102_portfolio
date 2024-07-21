import { 
  ProjectMain,
  Text,
} from "./project.style";

import ProjectItem from "./ProjectItem";

function Project () {
  return(
    <ProjectMain>
      <Text>Projects</Text>
      <ProjectItem />
    </ProjectMain>
  )
}

export default Project;