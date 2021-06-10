import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()  => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}>
                        THETA <i className="fa fa-plane"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/search' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                                Search
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                                Cart
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/register' 
                            className='nav-links-mobile' 
                            onClick={closeMobileMenu}
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
