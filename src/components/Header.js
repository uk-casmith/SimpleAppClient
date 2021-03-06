import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <Link to="/">Home</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signout">Sign Out</Link>
                <Link to="/featuret">Feature</Link>
            </>
        );
    }
}

export default Header;