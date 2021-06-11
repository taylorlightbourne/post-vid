import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';
import './SearchContainer.css';
import ErrorPage from '../pages/ErrorPage';


const SearchContainer = () => {
  const [events, setEvents] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getEventRequest = async (searchValue) => {
    
		const FEATURED_API = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchValue}&countryCode=US&apikey=kjvLvGRnouIST4VOf6JGxrYNfutHEsdU`;

		const response = await fetch(FEATURED_API);
		const responseJson = await response.json();
		
		if (responseJson._embedded) {
			setEvents(responseJson._embedded);
		} else {
			setEvents([""])
		}
	};


	return (
		<div>
			{
				events === [""] ? (<ErrorPage />)  : 
				(
			<>
			<div>
				<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} getEventRequest={getEventRequest}/>
			</div>
			<div className="SearchResults__container">
				<SearchResults
					events={events}
				/>
			</div>
			</>

				)
			}

		</div>
	);
};

export default SearchContainer;
