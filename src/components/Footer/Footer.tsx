import {
  FooterMain,
  CopyWright,
  CopyEmail,
} from "./footer.style";

function Footer() {
  const email = "rlcks01537@gmail.com";
  const copyToClipboard = (text: string) => {
    if(navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert('E-mail이 복사 되었어요!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    } 
  }

  return (
    <FooterMain>
      <a href="https://github.com/LEEKICHAN0102" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/LEEKICHAN0102 GitHub-000000?style=flat-square&logo=GitHub&logoColor=ffffff" alt="GitHub" />
      </a>
      <CopyWright>© 2024. LEEKICHAN0102. All Rights Reserved. Thanks for Visiting my portfolio!</CopyWright>
      <CopyEmail onClick={() => copyToClipboard(email)}>
        E-mail: {email}
      </CopyEmail>
    </FooterMain>
  );
}

export default Footer;
