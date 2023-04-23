import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="md" bg="light" variant="ljight">
          <Container>
            <Navbar.Brand href="#home">Job portal </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                {/*  <Nav className="ms-auto"> */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link-primary" : "nav-link"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "link-primary" : "nav-link"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/appliedjobs"
                  className={({ isActive }) =>
                    isActive ? "link-primary" : "nav-link"
                  }
                >
                  Appliedjobs
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "link-primary" : "nav-link"
                  }
                >
                  Blog
                </NavLink>
              </Nav>
              {/* <Nav className="ms-auto">
            <Button>Start Applying</Button>
          </Nav> */}
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}

                {user ? (
                  <Button variant="secondary">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Job portal </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link to="#">Home</Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}

                {user ? (
                  <Button variant="secondary">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;
