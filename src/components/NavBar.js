import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav ,NavDropdown } from 'react-bootstrap'
import logo from '../logo.png';
import {Link} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';

class NavBar extends Component {
 render() {
  return (
   <div>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand  href="#home"> 
  <img  src= {logo}
     className="d-inline-block align-top img"
     alt="Logo"
     width="175"
     height="125">
     </img>
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/Home" activeClassName="selectedLink" strict>Home</Nav.Link>
      <Nav.Link href="#shopping">Shopping Spot</Nav.Link>
      </Nav> 
    <Nav>
      <NavDropdown title="All products" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Snacks">Snacks</NavDropdown.Item>
        <NavDropdown.Item href="/Powder">Powders</NavDropdown.Item>
        <NavDropdown.Item href="/Pickles">Pickles</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Upcoming">Upcoming Products</NavDropdown.Item>
      </NavDropdown>  
      <Nav.Link href="/Contact" activeClassName="selectedLink" strict>Get In Touch</Nav.Link>
    </Nav>
    {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> 
    </Nav>  */}
  </Navbar.Collapse>
</Navbar>
   </div>
  );
 }
}

export default NavBar;
