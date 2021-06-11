import React from 'react';
import '../App.css';
import '../components/SearchInput.css';



const SearchInput = (props) => {

    const handleSubmit = event => {
        console.log(props.searchValue)
        event.preventDefault();
        props.getEventRequest(props.searchValue);
      }

	return (
        <div className='search-container'>
        <div className="search-contents">
            <div className="main-search">
                <form 
                onSubmit={handleSubmit}
                >
                    <div className="form__header">
                        <h3>Search for Events <i class="fas fa-search-location"></i></h3>
                    </div>
                    <div className="form__input">
                        <input
                        className="input__field"
                        type="input" 
                        name="input"
                        placeholder="Enter a Keyword"
                        value={props.searchValue}
                        onChange={(event) => props.setSearchValue(event.target.value)}>
                        </input>
                    </div>
                    <div>
                        <button className="submit__btn" type="submit">Find Events</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
	);
};

export default SearchInput;