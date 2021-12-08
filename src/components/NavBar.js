import React from 'react';
import {NavbarBrand,Navbar,Nav,NavItem} from "react-bootstrap";
import {
   
    NavLink
  } from "react-router-dom";

const NavBar = () => {
    return(
        
    <Navbar collapseOnSelect expand="xl" variant="light" style={{height:'200px'}}>
  <h4 href="/home" className="brand">PORTFOLIO</h4>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{}}/>
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="justify-content-end"  style={{ width: "100%" }}> 
    <NavItem className="navitemclass">
    <NavLink to="/home" className="unselected" activeClassName="selected" >Home</NavLink>
    </NavItem>
    <NavItem  className="navitemclass">
    <NavLink to="/skills" className="unselected" activeClassName="selected">Skills</NavLink>
    </NavItem>
    <NavItem  className="navitemclass">
    <NavLink to="/certification" className="unselected" activeClassName="selected">Certifications</NavLink>
    </NavItem>
    <NavItem  className="navitemclass">
    <NavLink to="/hobbies" className="unselected" activeClassName="selected">Hobbies</NavLink>
    </NavItem>
    </Nav>
   
   
  </Navbar.Collapse>
</Navbar>
      
    )
}

export default NavBar;