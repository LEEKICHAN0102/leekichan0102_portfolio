import { useScroll, useMotionValueEvent, useAnimation } from "framer-motion";
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

  const scrollToSection = async (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70; // 헤더 높이를 고려한 오프셋
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
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
            <li onClick={() => scrollToSection('about')}>About Me</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
          </ul>
        </HeaderList>
      </HeaderNav>
    </>
  );
}

export default Header;
