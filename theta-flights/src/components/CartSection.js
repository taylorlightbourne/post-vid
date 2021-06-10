import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.Cart);
  console.log(cart);
  return (
    <div>
      <h1 className="cart-header">Favorites</h1>
      <div className="favorites-cart">
        {cart.event.map((event) => (
          <CartItem event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}