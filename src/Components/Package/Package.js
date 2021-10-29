import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {

    const {id, name, img, totalRatings, description, price} = props.package;

    return (
        <div className='package'>
            <div className="package-img">
                <img src={img} alt="package-img" />
            </div>
            <div className="package-text">
                <h2><i className="fas fa-map-marker-alt"></i> {name}</h2>
                <h4>{totalRatings} Ratings</h4>
                <h3>$ {price}/Per Person</h3>
                <p>{description.slice(0,80)}...</p>
                <Link to={`/package/${id}`}><button className="btn btn-package">Book Now!</button></Link>
            </div>
        </div>
    );
};

export default Package;