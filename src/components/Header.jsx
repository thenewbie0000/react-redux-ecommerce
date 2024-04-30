import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { DELETE_FROM_CART } from "../redux/action/action";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(0);
  const [price, setPrice] = useState(0)
  console.log(price)
  const open = Boolean(anchorEl);

  const getData = useSelector((state) => state.cartReducer.carts);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const deleteData = (id)=>{
    dispatch(DELETE_FROM_CART(id))
  }

  const totalPrice = ()=>{
    let price= 0;
    getData.map((element, k)=>{
      price = price + element.price*element.qnty;
    })
    setPrice(price);
  }

  useEffect(()=>totalPrice(),[totalPrice])

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "9vh" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            E-Kart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-3">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "24px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <i
                className="fas fa-close smallclose"
                style={{
                  position: "absolute",
                  top: 7,
                  right: 10,
                  fontSize: 23,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              ></i>
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((card) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink
                              to={`/cart/${card.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={card.imgdata}
                                alt={card.rname}
                                style={{ width: "5rem", height: "5rem" }}
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{card.rname}</p>
                            <p>Price: ${card.price}</p>
                            <p>Quantity: {card.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                cursor: "pointer",
                                fontSize: 20,
                              }}
                            >
                              <i className="fas fa-trash" onClick={()=>deleteData(card.id)}></i>
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center mt-1">
                    <b className="p-0">Total:</b> $ {price}
                  </p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "20rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                style={{
                  position: "absolute",
                  top: 7,
                  right: 10,
                  fontSize: 23,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              ></i>
              <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
              <img
                src="/cart.gif"
                alt="Your Cart"
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
