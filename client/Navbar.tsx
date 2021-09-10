import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" variant="light" expand="sm">
      <Container>
      <Navbar.Brand href="#home">PuppyChores</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>Dog</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}