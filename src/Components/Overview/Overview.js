import React from 'react';
import './Overview.css';

const Overview = () => {
    return (
        <div className='overview'>
            <div className="container flex">
                <div>
                    <h2>856</h2>
                    <p>Tours are Completed</p>
                </div>
                <div>
                    <h2>22+</h2>
                    <p>Professional Tour Guides</p>
                </div>
                <div>
                    <h2>17+</h2>
                    <p>Travelling Experience</p>
                </div>
                <div>
                    <h2>52K+</h2>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;