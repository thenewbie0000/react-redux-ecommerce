import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cartsdata from "./CartData";
import "./style.css";

const Carts = () => {
  const [data, setData] = useState(Cartsdata);

  return (
    <div className="container mt-3 text-center">
      <h2>E-Kart</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((card) => (
          <Card
            key={card.id}
            className="card_style mx-4 mt-4"
          >
            <Card.Img variant="top" src={card.imgdata} className="cart-img" />
            <Card.Body>
              <Card.Title>{card.rname}</Card.Title>
              <Card.Text>
                Price: ${card.price} <br />
                Rating: {card.rating} <br />
                {card.somedata}
              </Card.Text>
              <div className="button_div d-flex justify-content-center">
                <Button variant="primary">Add to Cart</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Carts;
