import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to='/'>Home</Link>
                <Link to='/home'>Food</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <h1>Welcome to my food court</h1>
        </div>
    );
};

export default Header;