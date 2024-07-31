// styles
import { 
  ItemContainer,
  PercentContainer,
  PercentageBar,
  HoverText,
  PercentageText,
} from "./skill.style";

// skillItem Props
interface IProps {
  itemImage: string;
  percentage: number;
  proficiency: string;
}

function SkillItem({
  itemImage,
  percentage,
  proficiency,
}: IProps) {
  return (
    <ItemContainer>
      <img src={itemImage} alt="skill" />
      <PercentContainer>
        <PercentageBar percentage={percentage} />
        <HoverText>{proficiency}</HoverText>
      </PercentContainer>
      <PercentageText>{percentage}%</PercentageText>
    </ItemContainer>
  );
}

export default SkillItem;

