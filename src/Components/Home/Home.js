import React from 'react';
import Banner from '../Banner/Banner';
import Overview from '../Overview/Overview';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Overview></Overview>
        </div>
    );
};

export default Home;