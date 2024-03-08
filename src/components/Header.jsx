import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{height:'9vh'}}>
        <Container>
          <NavLink to="/" className='text-decoration-none text-light mx-3'>E-Kart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/"  className='text-decoration-none text-light mx-3'>Home</NavLink>
            <NavLink to="/cart" className='text-decoration-none text-light'>Add to Cart</NavLink>
          </Nav>
          <Badge badgeContent={4} color="primary">
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "24px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
