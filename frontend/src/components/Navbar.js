import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="nav-brand" as={Link} to={"/"}>
            UniReads
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="nav-links" as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link className="nav-links" as={Link} to={"/about"}>
              About Us
            </Nav.Link>
            <Nav.Link className="nav-links" as={Link} to={"/contact"}>
              Contact Us
            </Nav.Link>
            <Nav.Link className="nav-links" as={Link} to={"/login"}>
              Register/Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComponent;