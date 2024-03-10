import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { DELETE_FROM_CART } from "../redux/action/action";

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
  const history = useNavigate();
  const deleteData = (id)=>{
    dispatch(DELETE_FROM_CART(id))
    history('/');
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
                  <img
                    src={element.imgdata}
                    alt=""
                  />
                </div>

                <div className="details">
                  <Table>
                    <tr>
                      <td colSpan={2}>
                        <p style={{ margin: 0, padding: 0 }}>
                          <b>Restaurant : </b>{element.rname}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b style={{ margin: 0, padding: 0 }}>Price:</b> ${element.price}
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
                        <b style={{ margin: 0, padding: 0 }}>Address:</b> {element.address}
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
                        <b style={{ margin: 0, padding: 0 }}>Total:</b> $ 350
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button className="my-3" variant="danger" onClick={()=>deleteData(element.id)}>
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
