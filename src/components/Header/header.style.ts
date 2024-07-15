import styled from "styled-components";

export const HeaderMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  height: 10vh;
  background-color: #161B22;
  padding: 0 50px;
  z-index: 99;
`;

export const HeaderLogo = styled.div`
  height: inherit;

  svg {
    width: 100%;
    height: 100%;
    padding: 10px;
  }

  cursor: pointer;
`;

export const HeaderNav = styled.nav`
  color: white;

  ul {
    display: flex;
    gap: 30px;
  }
  
  li {
    cursor: pointer;
  }
`;