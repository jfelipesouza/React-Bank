import React from "react";
import Header from "../../components/header";
import HeroSection from "../../components/herosection";
import Section from "../../components/sections";
import { Container } from "./styled";
import { data } from "../../components/sections/data";
import ServicesSection from "../../components/servicesection";
import Footer from "../../components/footer";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeroSection />
      {data.map((object) => (
        <Section
          id={object.id}
          alt={object.alt}
          img={object.img}
          description={object.description}
          headLine={object.headLine}
          imgStart={object.imgStart}
          lightText={object.lightText}
          lightBg={object.lightBg}
          topLine={object.topLine}
          btnText={object.btnText}
        />
      ))}
      <ServicesSection id={"services"} />

      <Footer />
    </Container>
  );
};

export default Home;
