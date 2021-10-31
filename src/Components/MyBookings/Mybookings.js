import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Bookings from '../Bookings/Bookings';

const Mybookings = () => {

    const {user} = useAuth();
    const [allBookings, setAllBookings] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://arcane-sierra-20746.herokuapp.com/allbookings')
        .then(res => res.json())
        .then(data => setAllBookings(data))
        .catch(error => setError(error.message))
    },[])

    const myBookings = allBookings.filter(b => b.email === user?.email)

    return (
        <div className='all-bookings'>
        <h1 className="title">My Trips</h1>
        <h2 style={{'textAlign': 'center', 'fontSize': '30px', 'color': 'green', 'marginBottom': '20px'}}>Upcoming Trips: {myBookings.length}</h2>
        <div className="container">
            {
                myBookings.map( book => <Bookings
                key={book._id}
                booking={book}
                ></Bookings>)
            }
            <div style={{'textAlign': 'center', "fontColor": "red", "fontSize": '24px'}}>
                {error}
            </div>
        </div>
    </div>
    );
};

export default Mybookings;