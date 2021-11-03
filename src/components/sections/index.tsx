import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  Colum1,
  Colum2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img,
  Button,
} from "./styled";

interface SectionProps {
  id: string;
  lightBg: Boolean;
  lightText: Boolean;
  imgStart: Boolean;
  topLine: string;
  headLine: string;
  description: string;
  btnText?: string;
  img: any;
  alt: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  lightBg,
  lightText,
  imgStart,
  topLine,
  headLine,
  description,
  btnText,
  img,
  alt,
}) => {
  return (
    <SectionContainer id={id} lightBg={lightBg}>
      <SectionWrapper>
        <SectionRow imgStart={imgStart}>
          <Colum1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <SubTitle lightText={!lightText}>{description}</SubTitle>
              <BtnWrap>
                <Button
                  lightContent={lightBg}
                  to={id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  {btnText}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Colum1>
          <Colum2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Colum2>
        </SectionRow>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Section;
