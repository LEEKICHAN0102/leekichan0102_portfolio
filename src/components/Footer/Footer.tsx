//libs
import { useState, useEffect } from "react";

import {
  FooterMain,
  CopyWright,
  CopyEmail,
  TreeTop,
} from "./footer.style";

function Footer() {
  const email = "rlcks01537@gmail.com";
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const copyToClipboard = (text: string) => {
    if(navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert('E-mail이 복사 되었어요!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    } 
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShowButton(true); // 위로 스크롤하면 버튼을 보이게 함
      } else {
        setShowButton(false); // 아래로 스크롤하면 버튼을 숨김
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <FooterMain>
        <a href="https://github.com/LEEKICHAN0102" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/LEEKICHAN0102 GitHub-000000?style=flat-square&logo=GitHub&logoColor=ffffff" alt="GitHub" />
        </a>
        <CopyWright>© 2024. LEEKICHAN0102. All Rights Reserved. Thanks for Visiting my portfolio!</CopyWright>
        <CopyEmail onClick={() => copyToClipboard(email)}>
          E-mail: {email}
        </CopyEmail>
      </FooterMain>
      <TreeTop
        show={showButton}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ▲
      </TreeTop>
    </>
  );
}

export default Footer;
