import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            {/* <img src={} alt="" /> */}
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/donation">Donation</Link>
                <Link to="/events">Events</Link>
                <Link to="/register">Register</Link>
                <button onClick={() => setLoggedInUser({})}>Sign out</button>
            </nav>
        </div>
    );
};

export default Header;