import React from 'react';
import "./Cards.css";
import './SearchResults.css'
import { Link } from 'react-router-dom';


const SearchResults = (props) => {
	const events = props.events.events ? props.events.events: []
	
	return (
        <div className="results__container" >
			{events.map((events, index) => (
			      <li className='cards__item'>
				  <Link className='cards__item__link' to={`/event/${events.id}`}>
					<figure className='cards__item__pic-wrap' data-category={events.type}>
					  <img
						className='cards__item__img'
						alt='Travel Site'
						src={events.images[0].url}
					  />
					</figure>
					<div className='cards__item__info'>
					  <h5 className='cards__item__text'>{events.name}</h5>
					</div>
				  </Link>
				</li>
			))}
		</div>

	);
};

export default SearchResults;
