// libs
import { useRef } from "react";
import { useInView } from "framer-motion";

import { 
  ProjectMain,
  Text,
} from "./project.style";

import ProjectItem from "./ProjectItem";

function Project () {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return(
    <ProjectMain
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Text
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s 0.4s"
        }}
      >Projects</Text>
      <ProjectItem name="pokehub" />
      <ProjectItem name="pookimon" />
      <ProjectItem name="suldaksuldak" />
    </ProjectMain>
  )
}

export default Project;