import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link,Outlet} from 'react-router-dom'
import React from 'react';

export const NavBarComp = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">PAGINA DEPORTIVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">TORNEOS</Nav.Link>
              <Nav.Link href="#pricing">CONTACTENOS</Nav.Link>
              <NavDropdown title="DEPORTES" id="collapsible-nav-dropdown">
                <NavDropdown.Item as = {Link} to={'/futbol'}>Futbol</NavDropdown.Item>
                <NavDropdown.Item as = {Link} to={'/baloncesto'}>
                  Baloncesto
                </NavDropdown.Item>
                <NavDropdown.Item as = {Link} to={'/Golf'}>Golf</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as = {Link} to={'/natacion'}>
                  Natación
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet>
  
        </Outlet>

      </section>
      </>
    );
};

export default NavBarComp;