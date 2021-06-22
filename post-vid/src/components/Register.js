import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Registration } from '../actions/SignUpAction';
import footerDesign from '../Assets/FooterDesign.png'
import './LoginRegister.css';

const Register = () => {
    const dispatch = useDispatch()

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return (
    <div className="main-container">
        <div className="main-contents">
            <div className="header">
                <h1 id="login">Sign Up</h1>
                <p id="p_notice">Please fill in this form to create an account.</p>
            </div>
            <form onSubmit={(e) => Registration(dispatch, username, password, email,e)}>
                <div>
                    <input type="text" name="email" id="floatingInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <br></br>
                <div>
                    <input type="text" name="username" id="floatingInput" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required></input>
                </div>
                <br></br>
                <div>
                    <input type="password" name="password" id="floatingInput" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <br></br>
                <div className="submit__btn">
                    <button type="submit" id="submit__btn" >Create Account</button>
                </div>
            </form>
            <Link to="/login">
                <p id="link">Already Have an Account? Login Here</p>
            </Link>
        </div>
        <footer>
            <img src={footerDesign} />
        </footer>
    </div>
    )
};
export default Register;
