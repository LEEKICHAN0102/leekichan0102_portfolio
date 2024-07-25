import GlobalStyle from "./GlobalStyle.ts";
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";

import theme from "./theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
