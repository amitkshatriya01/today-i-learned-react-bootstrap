import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function AppNavBar({
  categories,
  showForm,
  setShowForm,
  currentCategory,
  setcurrentCategory,
}) {
  return (
    <>
      <Container>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Get Your Facts Straight!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Category" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => setcurrentCategory("all")}>
                    all
                  </NavDropdown.Item>
                  {categories.map((cat) => (
                    <NavDropdown.Item
                      onClick={() => setcurrentCategory(cat.name)}
                    >
                      {cat.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
              <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Add Fact"}
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default AppNavBar;
