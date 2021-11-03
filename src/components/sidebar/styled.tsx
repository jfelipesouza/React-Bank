import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

interface SidebarContainerProps {
  isOpen?: Boolean;
}

export const Container = styled.div<SidebarContainerProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.ligthBlack};
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${(props) => props.theme.colors.white};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 5rem);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 3.75rem);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 0.5rem 2rem;
  border-radius: 3rem;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
  }
`;
