import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { Container } from "./styled";

const Header: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar />
    </Container>
  );
};

export default Header;
