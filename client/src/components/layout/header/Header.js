import React from "react";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              alt="DataTonic"
              src="assets/datatonic-logo-white.svg"
              className="d-inline-block align-top ml-4" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" activeClassName="active" className="navlink">Health Dashboard</NavLink>
            <NavLink to="/score" activeClassName="active" className="navlink">Live Score</NavLink>
            <NavLink to="/statistics" activeClassName="active" className="navlink">Statistics</NavLink>
            <NavLink to="/analytics" activeClassName="active" className="navlink">Analytics</NavLink>
            <NavLink to="/forecasts" activeClassName="active" className="navlink">Forecast</NavLink>
          </Nav>
          <Navbar.Text className="text-light mr-4">
            John Doe
        </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;