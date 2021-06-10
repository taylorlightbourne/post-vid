import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import './CartSection.css';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="cart-container">
      <h1 className="cart-header">Favorites</h1>
      <div className="favorites-cart">
        {cart.events.map((event) => (
          <CartItem event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}