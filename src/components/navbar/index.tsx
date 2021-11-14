import React, { useContext } from "react";
import {
  Navbar as NavbarContainer,
  NavContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
  MobileIcon,
} from "./styled";

import { FaBars } from "react-icons/fa";
import { Context } from "../../services/context";

const Navbar: React.FC = () => {
  const { open, setOpen } = useContext(Context);

  return (
    <NavbarContainer>
      <NavContainer>
        <NavLogo to="/">RBank</NavLogo>

        <MobileIcon onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLink to="about" activeClass="active" smooth={true}>
              Sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="discover" activeClass="active" smooth={true}>
              Saiba Mais
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="services" activeClass="active" smooth={true}>
              Serviços
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="singup" activeClass="active" smooth={true}>
              Sing Up
            </NavLink>
          </NavItem>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/singin">Sing In</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </NavbarContainer>
  );
};

export default Navbar;
