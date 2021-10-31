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
                        {user?.email &&
                            <li><Link to='/mybookings'>My Bookings</Link></li>
                        }
                        {user?.email &&
                            <li><Link to='/allbookings'>All Bookings</Link></li>
                        }
                        {user?.email &&
                            <li>User: <span className='user-name'>{user.displayName}</span></li>
                        }
                        {!user?.email && 
                            <li><Link to='/login'>Sign in</Link></li>
                        }
                        {user?.email &&
                            <li><button onClick={logOut}>Sign Out <i className="fas fa-sign-out-alt"></i></button></li>
                        }
                    </ul>
                </nav>
            </div>            
        </div>
    );
};

export default Navbar;