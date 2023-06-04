import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export function Navbarr() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" key="lg" expand="lg" className="mb-3" style={{backgroundColor:"white"}} variant="light">
        <Container>
        <Navbar.Brand href="#home"> <h2> Gopinath </h2> </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            className="dropBox"
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} href="#home">
              Gopinath
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#about"> <h6> About </h6> </Nav.Link>
                <Nav.Link href="#skills"> <h6> Skills </h6> </Nav.Link>
                <Nav.Link href="#projects"> <h6> Projects </h6> </Nav.Link>
                <Nav.Link href="#resume"> <h6> Resume </h6> </Nav.Link>
                <Nav.Link href="#contact"> <h6> Contact </h6> </Nav.Link>
              </Nav>
               
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
