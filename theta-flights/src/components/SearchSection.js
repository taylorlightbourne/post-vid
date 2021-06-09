import React from 'react';
import '../App.css';
import './SearchSection.css';

function SearchSection() {
  return (
      
    <div className='search-container'>
        <div className="search-contents">
            <div className="search-header">
                <h1>BOOK A FLIGHT</h1>
            </div>
            <div className="main-search">
                <div className="input__container__one">
                    <div className="input__section">
                        <h3>Depart</h3>
                        <input 
                        className="search-input"
                        ></input>
                    </div>
                    <div className="input__section">
                        <h3>Arrive</h3>
                        <input 
                        className="search-input"
                        ></input>
                    </div>
                </div>
                <div className="input__container__two">
                    <div className="input__section">
                        <h3>Depart Date</h3>
                        <input 
                        className="search-input"
                        type="date"
                        ></input>
                    </div>
                    <div className="input__section">
                        <h3>Arrival Date</h3>
                        <input 
                        className="search-input"
                        type="date"
                        ></input>
                    </div>
                </div>
                <div className="search__btns">
                    <button className="submit__btn">Search</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SearchSection;
