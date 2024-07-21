import {
  Profile,
  Section,
  Text,
  TextList,
  TextTitle,
  TextSection,
  ImageSection,
} from "./project.style";

function ProjectItem () {
  return(
    <Profile>
      <ImageSection>
        <img />
        <Section>
          <span></span>
          <span></span>
          <span></span>
        </Section>
      </ImageSection>
      <TextSection>
        <Text>ㅎㅇ</Text>
        <Section>
          <TextTitle></TextTitle>
          <TextList></TextList>
          <TextList></TextList>
        </Section>
      </TextSection>
    </Profile>
  )
}

export default ProjectItem;