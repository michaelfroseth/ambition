import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Nav.Link href="/" className="text-white amb-logo">
          Ambition Fire
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about" className="text-white">
            About Us
          </Nav.Link>
          <Nav.Link href="/services" className="text-white">
            Services
          </Nav.Link>
          <Nav.Link href="/industries" className="text-white">
            Industries
          </Nav.Link>
          <Nav.Link href="/contact" className="text-white">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
