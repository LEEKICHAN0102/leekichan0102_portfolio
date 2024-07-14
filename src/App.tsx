import GlobalStyle from "./GlobalStyle.ts";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}

export default App
