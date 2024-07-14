import { createBrowserRouter } from "react-router-dom";

// components
import Layout from "../components/Layout";

// pages
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      }
    ]
  }
]);

export default router;