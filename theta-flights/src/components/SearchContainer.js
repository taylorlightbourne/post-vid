import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';
import "../App.css";
import './SearchContainer.css';

const SearchContainer = () => {
  const [events, setEvents] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getEventRequest = async (searchValue) => {
    
		const FEATURED_API = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchValue}&countryCode=US&apikey=gCuBI3xKu5yQnsJ8onGcrmLfnAA7NpHt`;

		const response = await fetch(FEATURED_API);
		const responseJson = await response.json();

		if (responseJson._embedded) {
			setEvents(responseJson._embedded);
		}
	};

	useEffect(() => {
		getEventRequest(searchValue);
	}, [searchValue]);



	return (
		<div>
			<div>
				<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className="EventCards" >
				<SearchResults
					events={events}
				/>
			</div>
		</div>
	);
};

export default SearchContainer;
