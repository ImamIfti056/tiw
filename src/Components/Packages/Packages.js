import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(()=> {
        fetch('https://arcane-sierra-20746.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])

    return (
        <div className='packages'>
            <div className="container">
                <h1 className="title">Pick Your Tour</h1>
                <div className="grid">
                {
                    packages.map( pack => <Package
                    key={pack.name}
                    package={pack}
                    ></Package>)
                }
                </div>
                <div className='add-tour'>
                    <Link to='/addpackage'><button className="btn btn-addTour"><i className="fas fa-plus"></i> Add New Tour</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Packages;