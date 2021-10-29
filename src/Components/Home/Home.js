import React from 'react';
import Banner from '../Banner/Banner';
import Overview from '../Overview/Overview';
import Packages from '../Packages/Packages';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Overview></Overview>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;