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
            <NavLink to="about">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="discover">Saiba Mais</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="services">Serviços</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="singup">Sing Up</NavLink>
          </NavItem>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/signin">Sing In</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </NavbarContainer>
  );
};

export default Navbar;
