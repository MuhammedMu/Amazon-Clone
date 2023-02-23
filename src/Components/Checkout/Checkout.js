import React from 'react'

import img1 from "../../images/img1.jpg"
import "./Checkout.css"

function Checkout() {
  return (
    <div className="checkout-outer-wraper">
      <div className="cart-wraper">
        <div className="carts">
          <div className="banner-title">Shooping Cart</div>

          <hr />
          <div className="all-data">
            <div className="product-img">
              <img src={img1} alt="" srcset="" />
            </div>

            <div className="data">
              <div className="title-wraper">
                <div className="title">
                  Iron Lorem ipsum dolor sit amet lo consectetur, adipisicing
                  elit.{" "}
                </div>
                <div className="price">$198.77</div>
              </div>

              <div className="instock">in Stock</div>
              <div className="shipping">Eligible for FREE Shipping</div>
              <div className="gift">This is a gift</div>
              <div className="style">
                Style: Advanced Fast Heatup Technology
              </div>
              <div className="color">Color: Blue</div>
              <div className="quantity">
                <div>
                  <select name="1" id="">
                    <option value="1">Qty: 1</option>
                    <option value="2">Qty: 2</option>
                    <option value="3">Qty: 3</option>
                    <option value="4">Qty: 4</option>
                    <option value="5">Qty: 5</option>
                    <option value="6">Qty: 6</option>
                    <option value="7">Qty: 7</option>
                    <option value="8">Qty: 8</option>
                    <option value="9">Qty: 9</option>
                    <option value="10+">Qty: 10</option>
                  </select>
                </div>

                <div className="last-edit">
                  <ul>
                    <li>
                      | <a href="/">Delete</a> |
                    </li>
                    <li>
                      <a href="/">Save for later</a> |
                    </li>
                    <li>
                      <a href="/">Compare with similar items</a> |
                    </li>
                    <li>
                      <a href="/">Share</a> |
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="subtotal">Subtotal (1 item): $198.77</div>
        </div>
      </div>

      
    </div>
  );
}

export default Checkout