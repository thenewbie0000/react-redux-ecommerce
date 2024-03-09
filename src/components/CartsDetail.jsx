import React from 'react'
import { Table } from 'react-bootstrap'

const CartsDetail = () => {
  return (
    <div className="container mt-2">
      <h2 className='text-center'>Items Detail Page</h2>
      <section className="container mt-3 p-0">
        <div className="items_detail d-flex">
          <div className="items_img">
            <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="" />
          </div>

          <div className="details">
            <Table>
              <tr>
                <td colSpan={2}>
                  <p style={{margin:0, padding:0}}><b>Restaurant : </b>Masala Theory</p>
                </td>
              </tr>
              <tr>
                <td>Price: $10</td>
                <td>Rating: 4.3</td>
              </tr>
              <tr>
                <td>Dishes: North Indian, Biryani, Mughlai</td>
                <td>Order Review: 1175+ order placed from here recently</td>
              </tr>
              <tr>
                <td>
                  Total: $ 350
                </td>
                <td>
                  Remove
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CartsDetail
