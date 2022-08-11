import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "img/navBar/logo.png";
import facebook from "img/navBar/facebookLink.png";
import insta from "img/navBar/instaLink.png";

const NavBar = () => {
  return (
    <Navbar className="nav" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <img className="nav__logo" src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle className="nav__toggle" />
        <Navbar.Collapse className="nav__collapse" id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Inventory</Nav.Link>
            <Nav.Link href="#">Financing </Nav.Link>
            <Nav.Link href="#">Contacts</Nav.Link>
            <Nav.Link href="#">
              <img src={facebook} alt="" />
            </Nav.Link>
            <Nav.Link href="#">
              <img src={insta} alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
