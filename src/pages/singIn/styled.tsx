import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secundary} 100%
  );
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100vw;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  background-color: rgb(51, 51, 51, 0.5);
`;

export const HeaderLogo = styled(LinkRouter)`
  color: ${({ theme }) => theme.colors.black.dark};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
`;

export const FormCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
  width: 60vw;
  padding: 1rem 0;
  box-shadow: 2px 3px 9px 2px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 750px) {
    width: 80vw;
  }

  @media screen and (max-width: 400px) {
    width: 91vw;
  }
`;

export const TextField = styled.div`
  width: 90%;
  margin: 0.5rem 0;
`;
export const Label = styled.label`
  font-size: 1rem;
`;
export const TextInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 1px;
  margin-top: 0.5rem;
  padding: 0 1.2rem;

  &:hover {
    border-color: red;
  }
`;

interface ButtonProps {
  textColor?: string;
  backgroundColor?: string;
}

export const Button = styled.div<ButtonProps>`
  width: 90%;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border-style: solid;
  border-width: 1px;
  margin: 0.5rem 0;
  cursor: pointer;
  align-items: center;
`;

export const FaceIcon = styled(BsFacebook)`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const GoogleIcon = styled(FcGoogle)`
  font-size: 1rem;
`;
