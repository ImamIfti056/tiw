import React, { useState, useEffect } from 'react';
import './PackageDetails.css';
import { useParams } from 'react-router';

const PackageDetails = () => {
    const {id} = useParams();

    const [packages, setPackages] = useState([]);

    useEffect(()=> {
        fetch('/mydb.json')
        .then(res=> res.json())
        .then(data => setPackages(data))
    },[packages])

    let pack = packages.find(pack => pack.id == id);

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
                        <form>
                            <div>
                                <input type="text" placeholder='Full Name' />
                            </div>
                            <div>
                                <input type="email" placeholder='Email' />
                            </div>
                            <div>
                                <input type="number" placeholder='Phone' />
                            </div>
                            <div>
                                <select>
                                    <option selected>Ticket Type</option>
                                    <option>Travel by Plane</option>
                                    <option>Travel by Bus</option>
                                </select>
                            </div>
                             <div>
                                <input type="number" placeholder='Passangers' />
                            </div>
                            <div>
                                <input type="date" />
                            </div>
                            <div>
                                <textarea rows="10" placeholder='Any Messages...'></textarea>
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