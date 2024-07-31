// utils
import GlobalStyle from "./GlobalStyle.ts";
import theme from "./theme.ts";

// libs
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from "react-router-dom";

// router
import router from "./router/index.tsx";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
