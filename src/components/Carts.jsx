import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cartsdata from "./CartData";

const Carts = () => {
  const [data,setData] = useState(Cartsdata)
  console.log(data)

  return (
    <div className="container mt-3 text-center">
      <h2>E-Kart</h2>
      <div className="row">
        {data.map((card) => (
          <Card key={card.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card.imgdata} />
            <Card.Body>
              <Card.Title>{card.rname}</Card.Title>
              <Card.Text>
                {card.somedata}
                Price: ${card.price}
                Rating: {card.rating}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Carts;
