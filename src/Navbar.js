import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Navbarr() {
  return (
    <>
      <Navbar fixed="top" style={{backgroundColor:"white"}} variant="light">
        <Container>
          <Navbar.Brand href="#home"> <h2> Gopinath </h2> </Navbar.Brand>
          <Nav>
            <Nav.Link href="#about"> <h6> About </h6> </Nav.Link>
            <Nav.Link href="#skills"> <h6> Skills </h6> </Nav.Link>
            <Nav.Link href="#projects"> <h6> Projects </h6> </Nav.Link>
            <Nav.Link href="#resume"> <h6> Resume </h6> </Nav.Link>
            <Nav.Link href="#contact"> <h6> Contact </h6> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
