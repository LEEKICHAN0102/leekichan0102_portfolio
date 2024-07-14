import { useRef } from "react";
import { 
  ReadingMain,
  Glass,
  Text,
} from "./reading.style";

function Reading() {
  const ReadingRef = useRef(null);

  return (
    <ReadingMain ref={ReadingRef}>
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
