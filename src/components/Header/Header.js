import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            {/* <img src={} alt="" /> */}
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/donation">Donation</Link>
                <Link to="/events">Events</Link>
                {/* <button onClick={() => setLoggedInUser({})}>Sign out</button> */}
            </nav>
        </div>
    );
};

export default Header;