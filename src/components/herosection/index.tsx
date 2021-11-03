import React, { useState } from "react";
import {
  HeroBg,
  HeroContainer,
  HeroVideo,
  HeroContent,
  HeroTitle,
  HeroParagrath,
  HeroBtn,
  HeroBtnContainer,
  ArrowForward,
  ArrowRight,
} from "./styled";
import Video from "../../assets/videos/video.mp4";

const HeroSection: React.FC = () => {
  const [hover, setHover] = useState(true);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <HeroVideo autoPlay loop muted src={Video} typeof={"video/mp4"} />
      </HeroBg>
      <HeroContent>
        <HeroTitle>Um Banco Virtual Facilitado Para Você</HeroTitle>
        <HeroParagrath>
          Cadastre-se para uma nova conta hoje e receba R$ 250 de crédito em seu
          próximo pagamento.
        </HeroParagrath>
        <HeroBtnContainer onMouseEnter={onHover} onMouseOut={onHover}>
          <HeroBtn to={"singup"}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroBtn>
        </HeroBtnContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
