import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyNav(){
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <img src = "./book-logo.jpeg" alt="books-logo"></img>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#">Home </Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
}