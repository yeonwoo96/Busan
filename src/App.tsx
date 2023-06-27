import React from "react";
import Header from "./Header";
import Banner from "./Sections/Banner";
import Info from "./Sections/Info";
import styled from "styled-components";
import Alert from "./Sections/Alert";
import Commu from "./Sections/Commu";
import Bannerpage from "./Sections/Bannerpage";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: hidden;
`;
const App = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Info />
      <Alert />
      <Commu />
      <Bannerpage />
      <Footer />
    </Container>
  );
};

export default App;
