// hooks
import { useRef } from "react";

// styles
import { 
  ReadingMain,
  Glass,
  Text,
} from "./reading.style";

interface IProps {
  id: string;
}

function Reading({id}: IProps) {
  const ReadingRef = useRef(null);

  return (
    <ReadingMain id={id} ref={ReadingRef}>
      <Glass drag dragConstraints={ReadingRef} />
      <Text>
        <span>Hi, There!</span>
        <span>I'm Junior FE Developer</span>
        <span>Thanks for visiting my portfolio!</span>
      </Text>
    </ReadingMain>
  );
}

export default Reading;
