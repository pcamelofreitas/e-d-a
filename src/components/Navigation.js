import { Navbar, Container, Offcanvas } from "react-bootstrap";
import Char from "./Personagem";

const Navigation = (personagem) => {
  return (
    <Navbar bg="dark" expand={false} className="vw-100">
      <Container fluid>
        <Navbar.Brand className="text-white ">
          Aventuras Fantasticas
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="border-light"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton className="bg-dark text-white">
            <Offcanvas.Title id="offcanvasNavbarLabel" className="">
              Ficha do Personagem
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="container">
            <Char personagem={personagem} />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Navigation;
