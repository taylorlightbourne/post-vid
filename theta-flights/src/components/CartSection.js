import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.Cart);
  console.log(cart);
  return (
    <div>
      <h1 className="cart-header">Your Cart</h1>
      <div className="shopping-cart">
        {cart.event.map((event) => (
          <CartItem event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}