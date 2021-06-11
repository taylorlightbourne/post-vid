import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import './CartSection.css';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="cart-container">
      <div className="cart-header">
          <h1>Favorites <i class="fa fa-heart"></i></h1>
          <h3>Save for Later</h3>
      </div>
      <div className="favorites-cart">
        {cart.events.map((event) => (
          <CartItem event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}

