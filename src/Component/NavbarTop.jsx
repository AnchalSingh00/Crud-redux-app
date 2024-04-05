import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Nav.css'

function NavbarTop() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img src="https://cdn-icons-png.flaticon.com/128/8901/8901481.png" alt="" />
      </Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to="/">All Blog's</NavLink>
        <NavLink to="/create">Create-New Blog</NavLink>
        
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarTop