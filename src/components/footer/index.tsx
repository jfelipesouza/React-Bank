import React from "react";

import {
  Copy,
  FooterContainer,
  FooterMediaContainer,
  FooterTitle,
  Github,
  Instagram,
  Linkedin,
  MediaIcon,
} from "./styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer bgColor={"#004D4D"}>
      <FooterTitle>RBANK</FooterTitle>
      <FooterMediaContainer>
        <MediaIcon
          href={
            "https://www.linkedin.com/in/jo%C3%A3o-felipe-de-oliveira-souza-0928071a9/"
          }
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <Linkedin />
        </MediaIcon>
        <MediaIcon
          href={"https://www.instagram.com/joao.felipe.18/"}
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <Instagram />
        </MediaIcon>
        <MediaIcon
          href={"https://github.com/jfelipesouza"}
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <Github />
        </MediaIcon>
      </FooterMediaContainer>
      <Copy> by Felipe Souza &copy; 2021</Copy>
    </FooterContainer>
  );
};

export default Footer;
