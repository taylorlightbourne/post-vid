import React from 'react'
import { useDispatch } from "react-redux"
import { removeFromCart } from "../actions/cart-actions";
import './CartSection.css'

export default function CartItem(props) {
    const dispatch = useDispatch()
    return (
        <div className="cart-item-card">
            <h1>{props.event.name}</h1>
            <img src={props.event.images[0].url} alt="" />
            <button
                className="remove-button"
                onClick={() => 
                    removeFromCart(dispatch, props.event.id)
                }
            >Remove Item from Cart</button>
        </div>
    )
}