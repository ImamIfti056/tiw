import React, {useState, useEffect} from 'react';
import Bookings from '../Bookings/Bookings';

const AllBookings = () => {

    const [allBookings, setAllBookings] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:9000/allbookings')
        .then(res => res.json())
        .then(data => setAllBookings(data))
        .catch(error => setError(error.message))
    },[])

    return (
        <div className='all-bookings'>
            <h1 className="title">Manage all Trips</h1>
            <h2 style={{'textAlign': 'center', 'fontSize': '30px', 'color': 'green', 'marginBottom': '20px'}}>Upcoming Trips: {allBookings.length}</h2>
            <div className="container">
                {
                    allBookings.map( book => <Bookings
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

export default AllBookings;