import React from "react";
import Header from "../../components/header";
import { HeroSection } from "../../components/herosection";
import { Container } from "./styled";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeroSection />
    </Container>
  );
};

export default Home;
