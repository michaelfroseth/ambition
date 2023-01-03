import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function SubHeader() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand>
        <Nav.Link href="/" className="text-dark amb-logo">
          Ambition Fire
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about" className="text-dark">
            About Us
          </Nav.Link>
          <Nav.Link href="/services" className="text-dark">
            Services
          </Nav.Link>
          <Nav.Link href="/industries" className="text-dark">
            Industries
          </Nav.Link>
          <Nav.Link href="/contact" className="text-dark">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SubHeader;
