import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Github from "./images/github.svg";
import LinkedIn from "./images/linkedin.svg";

function NavBar() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">COVID-19</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/global">Global</Nav.Link>
            <Nav.Link href="/country">Country</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/sourav731" target="_blank">
              <img src={Github} width="30" height="30" alt="Github" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/sourav-prasad-414562151/"
              target="_blank"
            >
              <img src={LinkedIn} width="30" height="30" alt="Linkedin" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
