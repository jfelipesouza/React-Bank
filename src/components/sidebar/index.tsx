import React, { useContext } from "react";
import { Context } from "../../services/context";
import {
  Container as SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./styled";

const Sidebar: React.FC = () => {
  const { open, setOpen } = useContext(Context);

  return (
    <SidebarContainer isOpen={open} onClick={() => setOpen(!open)}>
      <Icon>
        <CloseIcon onClick={() => setOpen(!open)} />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={() => setOpen(!open)} to="about">
            Sobre
          </SidebarLink>
          <SidebarLink onClick={() => setOpen(!open)} to="discover">
            Saiba Mais
          </SidebarLink>
          <SidebarLink onClick={() => setOpen(!open)} to="services">
            Serviços
          </SidebarLink>
          <SidebarLink onClick={() => setOpen(!open)} to="singup">
            Sing Up
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="singin">Sing In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
