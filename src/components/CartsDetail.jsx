import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ADD_TO_CART, DECR_BY_1, DELETE_FROM_CART } from "../redux/action/action";

const CartsDetail = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const { id } = useParams();
  const getData = useSelector((state) => state.cartReducer.carts);

  const compareId = () => {
    let compareData = getData.filter((card) => {
      return card.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compareId();
  }, [id]);

  const dispatch = useDispatch();
  const AddToCart = (card) => {
    dispatch(ADD_TO_CART(card));
  };

  const history = useNavigate();
  const deleteData = (id) => {
    dispatch(DELETE_FROM_CART(id));
    history('/');
  };

  const decrBy1 = (item) =>{
    dispatch(DECR_BY_1(item));
  }

  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Detail Page</h2>
      <section className="container mt-3 p-0">
        <div className="items_detail d-flex">
          {data.map((element) => {
            return (
              <>
                <div className="items_img">
                  <img src={element.imgdata} alt="" />
                </div>

                <div className="details">
                  <Table>
                    <tr>
                      <td colSpan={2}>
                        <p style={{ margin: 0, padding: 0 }}>
                          <b>Restaurant : </b>
                          {element.rname}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b style={{ margin: 0, padding: 0 }}>Price:</b> $
                        {element.price}
                      </td>
                      <td>
                        <b style={{ margin: 0, padding: 0 }}>Rating:</b>{" "}
                        <span
                          style={{
                            padding: "0 4px",
                            background: "#9BCF53",
                            color: "white",
                            borderRadius: 5,
                          }}
                        >
                          {element.rating}★
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <b style={{ margin: 0, padding: 0 }}>Address:</b>{" "}
                        {element.address}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <b style={{ margin: 0, padding: 0 }}>Order Review:</b>{" "}
                        {element.somedata}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b style={{ margin: 0, padding: 0 }}>Total:</b> $ {element.price * element.qnty}
                      </td>
                    </tr>
                    <tr className="d-flex justify-content-space-between align-items-center">
                      <td
                        className="mx-5"
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 24,
                            background: "#ddd",
                            color: "#111",
                          }}
                          onClick={element.qnty<=1 ? ()=>deleteData(element.id) : () => decrBy1(element)}
                        >
                          -
                        </span>
                        <span
                          style={{
                            fontSize: 24,
                            background: "#ddd",
                            color: "#111",
                          }}
                        >
                          {element.qnty}
                        </span>
                        <span
                          style={{
                            fontSize: 24,
                            background: "#ddd",
                            color: "#111",
                          }}
                          onClick={() => AddToCart(element)}
                        >
                          +
                        </span>
                      </td>
                      <td>
                        <Button
                          className="my-3"
                          variant="danger"
                          onClick={() => deleteData(element.id)}
                        >
                          {" "}
                          Remove
                        </Button>
                      </td>
                    </tr>
                  </Table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CartsDetail;
