import React from "react";
import { Button, Table } from "react-bootstrap";

const CartsDetail = () => {
  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Detail Page</h2>
      <section className="container mt-3 p-0">
        <div className="items_detail d-flex">
          <div className="items_img">
            <img
              src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
              alt=""
            />
          </div>

          <div className="details">
            <Table>
              <tr>
                <td colSpan={2}>
                  <p style={{ margin: 0, padding: 0 }}>
                    <b>Restaurant : </b>Masala Theory
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <b style={{ margin: 0, padding: 0 }}>Price:</b> $10
                </td>
                <td>
                  <b style={{ margin: 0, padding: 0 }}>Rating:</b>{" "}
                  <span
                    style={{
                      padding: "0 4px",
                      background: "#9BCF53",
                      color: "white",
                      borderRadius:5
                    }}
                  >
                    4.3★
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <b style={{ margin: 0, padding: 0 }}>Dishes:</b> North Indian,
                  Biryani, Mughlai
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <b style={{ margin: 0, padding: 0 }}>Order Review:</b> 1175+
                  order placed from here recently
                </td>
              </tr>
              <tr>
                <td><b style={{ margin: 0, padding: 0 }}>Total:</b> $ 350</td>
              </tr>
              <tr>
                <td><Button className="my-3" variant="danger"> Remove</Button></td>
              </tr>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartsDetail;
