import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';
import "../App.css";
import './SearchContainer.css';

const SearchContainer = () => {
  const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
    
		const FEATURED_API = `http://www.omdbapi.com/?s=${searchValue}&apikey=2215d555`;

		const response = await fetch(FEATURED_API);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);




	return (
		<div>
			<div>
				<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className="MovieCards" >
				<SearchResults
					movies={movies}
				/>
			</div>
		</div>
	);
};

export default SearchContainer;
