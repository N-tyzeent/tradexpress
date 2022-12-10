import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import tradExpressLogo from "../images/TradExpress.png";
import { Link } from "react-router-dom";
import style from "../Style.css/NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="navbar1" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={tradExpressLogo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="buysell" to="/instantbuysell">Instant Buy/Sell</Link>
            <Link className="learn">Learn</Link>
            <Link className="login" to="/login">Login</Link>
            <Link className="getstarted" to="/getstarted">Get Started</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
