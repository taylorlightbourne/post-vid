import React from 'react';
import '../App.css';
import '../components/SearchInput.css';


const SearchInput = (props) => {

    // const handleSubmit = e => {
    //     e.preventDefault();
    //   }

	return (
        <div className='search-container'>
        <div className="search-contents">
            <div className="search-header">
                <h1>Search for Event</h1>
            </div>
            <div className="main-search">
                <form 
                // onSubmit={handleSubmit}
                >
                    <div>
                        <h3>Search for Events </h3>
                    </div>
                    <div>
                        <input
                        className="input__field"
                        type="input" 
                        name="input"
                        placeholder="Enter a Keyword"
                        value={props.value}
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