import React from 'react';
import "../App.css";
import './SearchResults.css'
// import { Link } from 'react-router-dom';
// { props: { name, images, id } }

const SearchResults = (props) => {
	return (
        <>
        <div className="results__container">
			{
			// props.events.map
			((events, index) => (
            <div className="events">
		    <div className="event-image">
			    <img src={events.images[0]} alt="Poster" />
		    </div>
		<div className="event-info">
			<h1>{events.name}</h1>
			<p>{events.id}</p>
		</div>
		{/* <Link to={`/event/${id}`}>
            <button>View More</button>
		</Link> */}
	</div>
			))}
		</div>
        </>
	);
};

export default SearchResults;

