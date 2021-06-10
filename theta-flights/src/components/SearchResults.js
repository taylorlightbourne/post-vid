import React from 'react';
import "../App.css";
import './SearchResults.css'
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
	const events = props.events.events ? props.events.events: []
	
	return (
        <div className="results__container">
			{events.map((events, index) => (
			<div className="events">
				<div className="event__header">
					<h1>{events.name}</h1>
				</div>
		    	<div className="event__image">
			    	<img src={events.images[0].url} alt="Poster" />
		    	</div>
				<div className="event-info">
					<p>{events.url}</p>
				</div>
				<div className="singlePage__Link">
					<Link to={`/event/${events.id}`}>
						<button>View More</button>
					</Link>
				</div>
			</div>
			))}

		</div>
	);
};

export default SearchResults;

