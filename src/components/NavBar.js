import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import lookbook from "../assets/lookbook.png";
import styles from "../styles/NavBar.module.css"
import { NavLink } from "react-router-dom";

// Navbar from react-bootstrap

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
      <NavLink to="/">
        <Navbar.Brand>
          <img src={lookbook} alt="lookbook" height="50" />
        </Navbar.Brand>
      </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-left">
          <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/explore">
              <i class="fa-solid fa-camera-retro"></i>Explore
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"
            >
              <i className="fas fa-sign-in-alt"></i>Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-user-plus"></i>Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;