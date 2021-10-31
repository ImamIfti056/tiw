import React, { useState, useEffect, useRef } from 'react';
import './PackageDetails.css';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';

const PackageDetails = () => {
    const {id} = useParams();
    const {user} = useAuth();

    const nameRef = useRef();
    // const emailRef = useRef();
    const phoneRef = useRef();
    const dateRef = useRef();
    const messageRef = useRef();
    const ticketRef = useRef();

    const [packages, setPackages] = useState([]);

    useEffect(()=> {
        fetch('https://arcane-sierra-20746.herokuapp.com/packages')
        .then(res=> res.json())
        .then(data => setPackages(data))
    },[packages])

    let pack = packages.find(pack => pack._id === id);

    const handleSubmit = e => {
        const name = nameRef.current.value;
        // const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const ticket = ticketRef.current.value;
        const message = messageRef.current.value;
        const date = dateRef.current.value;

        const newTraveller = {name, email: user?.email, phone, ticket, date, message, packageName: pack?.name };

        fetch( 'https://arcane-sierra-20746.herokuapp.com/traveller', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTraveller)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Package Booked!');
                e.target.reset();
            }
        })

        e.preventDefault();
    }

    return (
        <div className='package-details'>
            <div className="container">
                <div className="grid">
                    <div className="details">
                        <div>
                            <img src={pack?.img} alt="" />
                        </div>
                        <div>
                            <div className="flex">
                                <h2><i className="fas fa-map-marker-alt"></i> {pack?.name}</h2>
                                <h3><i className="fas fa-stopwatch"></i> {pack?.duration}</h3>
                                <h3><i className="fas fa-star"></i> {pack?.ratings}</h3>
                                <h3>{pack?.totalRatings} Ratings</h3>
                            </div>
                            <p>{pack?.description}</p>
                        </div>
                    </div>
                    <div className="form">
                        <h1>Book this Package</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="text" placeholder={`Type your Name (${user.displayName})`} ref={nameRef} required />
                            </div>
                            {/* <div>
                                <input type="email" placeholder={user.email} ref={emailRef} required />
                            </div> */}
                            <div>
                                <input type="number" placeholder='Phone' ref={phoneRef} required />
                            </div>
                            <div>
                                <select ref={ticketRef} required>
                                    <option selected>Ticket Type</option>
                                    <option>Travel by Plane</option>
                                    <option>Travel by Bus</option>
                                </select>
                            </div>
                            <div>
                                <input type="date" ref={dateRef} required />
                            </div>
                            <div>
                                <textarea rows="10" placeholder='Any Messages...' ref={messageRef} ></textarea>
                            </div>
                            <div>
                                <input type="submit" value='Submit' />
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;