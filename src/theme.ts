// theme.ts
interface ThemeProps {
  width: {
    desktop: string;
    pc: string;
    pc2: string;
  }
}

const theme: ThemeProps = {
  width: {
    desktop: "992px",
    pc: "1920px",
    pc2: "2560px",
  }
}

export default theme;