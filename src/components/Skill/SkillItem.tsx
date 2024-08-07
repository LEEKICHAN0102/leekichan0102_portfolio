// styles
import { 
  ItemContainer,
  SkillIcon,
  HoverText,
} from "./skill.style";

// skillItem Props
interface IProps {
  itemImage: string;
  proficiency: string;
}

function SkillItem({
  itemImage,
  proficiency,
}: IProps) {
  return (
    <ItemContainer>
      <SkillIcon>
        <img src={itemImage} alt={`alt=${itemImage}`} />
        <HoverText>{proficiency}</HoverText>
      </SkillIcon>
    </ItemContainer>
  );
}

export default SkillItem;

