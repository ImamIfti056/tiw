import React from 'react';
import './Bookings.css';

const Bookings = (props) => {

    const {_id, packageName, date, name, status } = props.booking;

    // UPDATING STATUS
    const handleUpdateStatus = (id) => {
        const proceed = window.confirm('Approve the Trip?');
        if(proceed){
            const url = `https://arcane-sierra-20746.herokuapp.com/allbookings/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(props.booking)
            })
            .then(res=> res.json())
            .then(data => {
                if(data.modifiedCount){
                    alert('Booking has been approved');
                    window.location.reload();
                }
            })
        }
    }

    // DELETING TRIP
    const handleDeleteTrip = (id) => {
        const proceed = window.confirm('Are you sure to cancel the trip?');
        if(proceed){
            const url = `https://arcane-sierra-20746.herokuapp.com/allbookings/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    alert('Trip Deleted Successfully');
                    window.location.reload();
                }
            })
        }
    }

    return (
        <div className='booking'>
            <div className="flex">
            <div>
                <h1>Trip To: <span>{packageName}</span></h1>
                <div className="flex2">
                    <h2>Travller Name: {name}</h2>
                    <h3>Travel Date: {date}</h3>
                </div>
                <h2>Status: <button onClick={()=> {handleUpdateStatus(_id)}} className="btn">{status}</button> </h2>
            </div>
            <div>
                <button onClick={()=>{handleDeleteTrip(_id)}} className="btn"><i className="fas fa-times"></i></button>
            </div>
            </div>
        </div>
    );
};

export default Bookings;