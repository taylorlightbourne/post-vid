import React from 'react'
import { useDispatch } from "react-redux"
import { removeFromCart } from "../actions/cart-actions"

export default function CartItem(props) {
    const dispatch = useDispatch()
    return (
        <div className="cart-item-card">
            <p>{props.event.name}</p>
            <button
                className="remove-button"
                onClick={() => 
                    removeFromCart(dispatch, props.event.id)
                }
            >Remove Item from Cart</button>
        </div>
    )
}