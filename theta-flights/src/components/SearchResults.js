import React from 'react';
import "../App.css";
import './SearchResults.css'


const SearchResults = (props) => {
	return (
        <>
        <div className="results__container">
			{props.movies.map((movie, index) => (
            <div className="movie">
		    <div className="movie-poster">
			    <img src={movie.Poster} alt="Poster" />
		    </div>
		<div className="movie-info">
			<h1>{movie.Title}</h1>
			<p>{movie.Year}</p>
		</div>
	</div>
			))}
		</div>
        </>
	);
};

export default SearchResults;

