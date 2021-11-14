import styled from "styled-components";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

interface FooterProps {
  bgColor: string;
}

export const FooterContainer = styled.footer<FooterProps>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
`;

export const FooterTitle = styled.h1`
  margin-top: 1rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterMediaContainer = styled.div`
  margin: 2rem 0;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const MediaIcon = styled.a`
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    border-radius: 1.5rem;
    background-color: ${({ theme }) => theme.colors.black.main};
  }
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 2rem;
`;

export const Github = styled(FaGithub)`
  font-size: 2rem;
`;

export const Instagram = styled(FaInstagram)`
  font-size: 2rem;
`;

export const Copy = styled.p`
  margin-bottom: 0.5rem;
`;
