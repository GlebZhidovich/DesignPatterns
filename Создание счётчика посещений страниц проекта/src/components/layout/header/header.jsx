import React from "react";
import Logo from "components/ui/logo/logo";
import Nav from "components/layout/nav/nav";
import { StyledSection } from "./styles";

// шапка сайта
function Header() {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav />
    </StyledSection>
  );
}

export default Header;
