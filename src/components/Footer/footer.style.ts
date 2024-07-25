import styled from "styled-components";

export const FooterMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black; 
  width: 100%;
  height: 20vh;
  bottom: 0;
  z-index: 10;
  gap: 20px;

  @media screen and (min-width: ${props => props.theme.width.pc}) {
    img {
      width: 200px;
      height: 30px;
    }
  }
`;

export const CopyWright = styled.span`
  color: white;
  font-size: 12px;
  font-weight: bold;

  @media screen and (min-width: ${props => props.theme.width.pc}) {
    font-size: 18px;
  }
`;

export const CopyEmail = styled(CopyWright)`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`;