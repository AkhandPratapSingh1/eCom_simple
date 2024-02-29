import React, { useState, useEffect } from "react";
import "../component/styles/cartPage.css";
import { Analytics } from "@vercel/analytics/react"

const CartPage = ({ cart, setcart, onhandleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((product_details) => product_details.id !== id);
    setcart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((product_details) => (ans += product_details.quantity * product_details.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      <Analytics />
      {cart.map((product_details) => (
        <div className="cart_box" key={product_details.id}>
          <div className="cart_img">
            <img src={product_details.productImageUrl} alt="" />
            <p>{product_details.productName}</p>
          </div>
          <div>
            <span>Quantity</span>
            <button>{product_details.quantity}</button>
          </div>
          <div>
            <span>₹{product_details.price}</span>
            <button onClick={() => handleRemove(product_details.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart- </span>
        <span>₹  {price}</span>
      </div>
    </article>
  );
};

export default CartPage;