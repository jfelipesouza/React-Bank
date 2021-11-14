import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

interface SectionContainerProps {
  lightBg?: Boolean;
}

interface SectionRowProps {
  imgStart?: Boolean;
}
interface HeadingProps {
  lightText?: Boolean;
}

interface ButtonProps {
  lightContent?: Boolean;
}

export const SectionContainer = styled.section<SectionContainerProps>`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ lightBg, theme }) =>
    lightBg ? theme.colors.white : theme.colors.black.ligth};

  @media screen and (max-width: 768px) {
    padding: 6.25rem 0;
  }
`;

export const SectionWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.5rem;
  justify-content: center;
`;

export const SectionRow = styled.div<SectionRowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Colum1 = styled.div`
  margin-bottom: 15px;
  padding: 0 0.9rem;
  grid-area: col1;
`;

export const Colum2 = styled.div`
  margin-bottom: 15px;
  padding: 0 0.9rem;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 3.75rem;
`;

export const TopLine = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Heading = styled.h2<HeadingProps>`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ theme, lightText }) =>
    lightText ? theme.colors.white : theme.colors.black.dark};

  @media screen and (max-width: 340px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.p<HeadingProps>`
  max-width: 440px;
  margin-bottom: 2.25px;
  font-size: 1.125rem;
  line-height: 1.5rem;
  text-align: justify;
  color: ${({ lightText, theme }) =>
    lightText ? theme.colors.black.dark : theme.colors.white};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const Button = styled(LinkScroll)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.25rem;
  cursor: pointer;
  border-radius: 3.125rem;
  padding: 0.9rem 3rem;
  white-space: nowrap;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  margin-top: 1rem;
  margin-bottom: 1rem;
  &:hover {
    background: ${({ theme, lightContent }) =>
      lightContent ? theme.colors.black.main : theme.colors.white};
    color: ${({ theme, lightContent }) =>
      lightContent ? theme.colors.primary : theme.colors.black.main};
  }
`;
