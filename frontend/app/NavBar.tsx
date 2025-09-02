"use client";

import Icon from "@/shared/Icon";
import { Container, Nav, Navbar as NavigationBar } from "react-bootstrap";

const NavBar = () => {
  return (
    <NavigationBar>
      <Container>
        <NavigationBar.Brand href="/">
          <Icon svg="/sprout.svg" />
          <span>De Groene Deler</span>
        </NavigationBar.Brand>
        <NavigationBar.Toggle aria-controls="main-navbar-nav" />
        <NavigationBar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link href="/sign-up">Inschrijven</Nav.Link>
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
};

export default NavBar;
