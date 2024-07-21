import { useScroll, useMotionValueEvent, useAnimation } from "framer-motion";
// import { Link } from "react-router-dom";
import { 
  HeaderNav,
  HeaderLogo,
  HeaderList,
  ProgressBar
} from "./header.style";

// assets
import Logo from "../../assets/Logo";

function Header() {
  const navAnimation = useAnimation();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1) {
      navAnimation.start("scroll");
    } else {
      navAnimation.start("top");
    }
  });

  const navVariants = {
    top: {
      backgroundColor: "rgba(0,0,0,0)"
    },
    scroll: {
      backgroundColor: "rgba(0,0,0,1)"
    }
  };

  return (
    <>
      <ProgressBar style={{ scaleX: scrollYProgress }} />
      <HeaderNav
        variants={navVariants}
        animate={navAnimation}
        initial={"top"}
      >
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <HeaderList>
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </HeaderList>
      </HeaderNav>
    </>
  );
}

export default Header;
