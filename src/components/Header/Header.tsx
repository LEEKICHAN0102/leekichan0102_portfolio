import { 
  HeaderMain,
  HeaderLogo,
  HeaderNav,
} from "./header.style";

import Logo from "../../assets/Logo";

function Header() {
  return(
    <HeaderMain>
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
      <HeaderNav>
        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </HeaderNav>
    </HeaderMain>
  );
}

export default Header;