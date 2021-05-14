import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
// import "../assets/scss/components/navbar.scss";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = ():any => setIsOpen(!isOpen);
  return (
    <div>h</div>
    // <div className="custom-navbar">
    //   <Navbar color="#2c3e50" light expand="md" style={{ position: "fixed", width: "100%", backgroundColor: "#1abc9c", zIndex: 100, height: "9%" }}>
    //     <NavbarBrand color={"#FFF"} className='custom-navbar-brand'>
    //       <Link color={"#FFF"} to={"/"}>Acme</Link>
    //     </NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="mr-auto" navbar>
    //         <NavItem className='custom-navbar-item'>
    //           <Link to="/products/">Books</Link>
    //         </NavItem>
    //         <NavItem className='custom-navbar-item'>
    //           <Link to="/about/">Blog</Link>
    //         </NavItem>
    //         <NavItem className='custom-navbar-item'>
    //           <Link to="/contact/">Contact</Link>
    //         </NavItem>
    //         <NavItem className='custom-navbar-item'>
    //           <Link to="/contact/">Login</Link>
    //         </NavItem>
    //         <NavItem className='custom-navbar-item'>
    //           <Link to="/contact/">Basket</Link>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </div>
  );
};
export default NavbarComponent;
