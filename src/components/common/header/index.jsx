"use client"
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import menuItems from "./menu.json";
import Link from 'next/link';

const Header = () => {
  return (
     <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Product Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              menuItems.map((item) => (
              <Nav.Link as={Link} key={item.id} href={item.url}>{item.title}   </Nav.Link>
              ))
            }
            
            
           
          </Nav>
        </Navbar.Collapse>
        <Link href="/dashboard">Dashboard</Link>
      </Container>
    </Navbar>
  )
}

export default Header