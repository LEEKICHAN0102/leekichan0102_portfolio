// libs
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

// components
import Footer from "./Footer/Footer";

const Container = styled.div`
  width: 100vw;
  min-height: auto;
  background-color: #0D1117;
`;

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Container>
      <Outlet />
      <Footer />
    </Container>
  );
}