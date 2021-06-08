import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'

function Navbar() {
    return (
        <div>
            <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to ="/" className="navbar-logo">
                        THETA <i className="fa fa-plane"></i>
                    </Link>
                    <div className="menu-icon">
                        
                    </div>
                </div>
            </nav>
            </>
        </div>
    )
}

export default Navbar
