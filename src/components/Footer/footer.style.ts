import styled from "styled-components";

// for media query
import media from "../../midea";

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
`;

export const CopyWright = styled.span`
  color: white;
  font-size: 12px;
  font-weight: bold;

  ${media.pc`
    font-size: 18px;
  `}

  ${media.pc2`
    font-size: 28px;
  `}
`;

export const CopyEmail = styled(CopyWright)`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`;

export const TreeTop = styled.button<{$show: boolean}>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #D5D1D1;
  color: black;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
  z-index: 1000;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  &:hover {
    background-color: #A19D9D;
    transition: 0.3s ease-in-out;
  }
  opacity: ${(props) => (props.$show ? 1 : 0)};
  transform: ${(props) => (props.$show ? 'translateY(0)' : 'translateY(100px)')};

  ${media.pc`
    bottom: 40px;
    right: 40px;
    width: 80px;
    height: 80px;
    font-size: 36px;
  `}

  ${media.pc2`
    bottom: 60px;
    right: 60px;
    width: 120px;
    height: 120px;
    font-size: 52px;
  `}
`;

export const GitHub = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 100%;
  }

  ${media.pc2`
    img {
      width: 150%;
      height: 150%;
    }
  `}
`;