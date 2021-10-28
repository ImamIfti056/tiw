import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container flex">
                <h1 className='logo'>Travel Agency</h1>
                <nav>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
            </div>            
        </div>
    );
};

export default Navbar;