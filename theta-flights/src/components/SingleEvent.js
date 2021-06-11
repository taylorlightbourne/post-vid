import React from 'react';
import "../App.css";
import './SingleEvent.css'
import { addToCart } from '../actions/cart-actions';
import { removeFromCart } from '../actions/cart-actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function SingleEvent(props) {
	const dispatch = useDispatch();
	const addedToCart = useSelector((state) => {
		return state.cart.events.find(
			(event) => event.id === props.eventInfo.id
		)
	})
  return (
    <div className="singleEvent__container">
		<div className="singleEvent__contents">
			<div className="event__image">
			    {/* <img src={props.eventInfo.images[0].url} alt="Poster" /> */}
		    </div>
			<div className="event__details">
				<h1>{props.eventInfo.name}</h1>
				<br></br>
				<p>{props.eventInfo.locale}</p>
				<br></br>
				<p><strong>Event Info: </strong>{props.eventInfo.info}</p>
				<br></br>
				<p><strong>Please Note: </strong>{props.eventInfo.pleaseNote}</p>
				<br></br>
				<p><strong></strong><a href={props.eventInfo.url}>Get Tickets</a></p>
				<div className="singleEvent__btns">
				<Link to="/search">
					<button className="search__btn">Search More</button>
				</Link>
					{
						addedToCart ?
						(
							<button
							className="remove-button"
							onClick={() => 
								removeFromCart(dispatch, props.eventInfo.id)
							}
						>Remove Item from Cart</button>
						):(
							<button className="addToCart__btn"
							onClick={() => addToCart(dispatch, props.eventInfo)}
							>Add to Cart</button>

						)
					}
				</div>
			</div>
		</div> 
		<div className="footer"><Footer /></div>	

	</div>
	);
};
