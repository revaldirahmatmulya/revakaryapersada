import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavbarSite.css";
import logo from "../assets/logo.png";

const NavbarSite = () => {
  return (
    <div className="site-navbar">
      <Navbar variant="light" expand="lg" className="bg-transparent">
        <Container>
          <Navbar.Brand href="#home">
            <div className="row">
              <div className="col-lg-3">
                <img className="brand-logo" src={logo} />
              </div>
              <div className="col-lg-4 brand-text">
                <h4 className="brand-top">CV. REVA KARYA PERSADA</h4>
                <h4 className="brand-bot">Conculting</h4>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href={"#home"}>Home</Nav.Link>
              <Nav.Link href={"#about"}>About</Nav.Link>
              <Nav.Link href={"#services"}>Services</Nav.Link>
              <Nav.Link href={"#team"}>Team</Nav.Link>
              <Nav.Link href={"#contact"}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSite;
