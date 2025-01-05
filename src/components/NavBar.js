import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
const NavStyle = { marginRight: "1em", textDecoraton: "none" };

const NavElement = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h4>Joel Rudin</h4>
        </Link>
        <Link className="nav-item nav-link active" to="/" style={NavStyle}>
          Home
        </Link>
        <Link className="nav-item nav-link" to="/portfolio" style={NavStyle}>
          Portfolio
        </Link>
        <Link className="nav-item nav-link" to="/contact" style={NavStyle}>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavElement;
