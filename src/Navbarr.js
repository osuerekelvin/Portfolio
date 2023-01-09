import React  from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from "react-router-dom";
import "./Navbarr.css"
import kelv1 from "./images/kelv1.png"

const Navbarr = () => {
  return (
    <Navbar className='navv' collapseOnSelect expand="lg"  variant="dark">
    <Container className='container'>
      <Navbar.Brand href="#home">
        <img className='logo' src={kelv1} alt="" />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
        </Nav>
        <Nav>
          <Nav.Link href="#home">
            Home
            </Nav.Link>
          <Nav.Link  href="#website" className='no'>
          Portfolio
          </Nav.Link>
          <Nav.Link href="#aboutme">
            About
            </Nav.Link>
          <Nav.Link href="#contactme">
            Contact
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr