import React from 'react';
import './Navbar.css'; // Make sure to create this CSS file

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Green Futures</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;