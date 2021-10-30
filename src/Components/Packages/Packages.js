import React, { useEffect, useState } from 'react';
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
            </div>
        </div>
    );
};

export default Packages;