import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const {user, logOut} = useAuth();

    return (
        <div className='navbar'>
            <div className="container flex">
                <h1 className='logo'>Travel Agency</h1>
                <nav>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/myorders'>My Orders</Link></li>
                        {user?.email &&
                            <li>{user.displayName}</li>
                        }
                        {!user?.email && 
                            <li><Link to='/login'>Login</Link></li>
                        }
                        {user?.email &&
                            <li><button onClick={logOut}>Sign Out</button></li>
                        }
                    </ul>
                </nav>
            </div>            
        </div>
    );
};

export default Navbar;