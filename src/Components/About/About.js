import React from 'react';
import './About.css';
import aboutImg from '../../about.jpg';

const About = () => {
    return (
        <div className='about'>
            <h1 className="title">About Us</h1>
            <div className="container grid">
                <div className='about-img'>
                    <img src={aboutImg} alt="about-img" />
                </div>
                <div className="about-text">
                    <p>
                        We have experienced a lot about travelling. We make 7-8 tours per month. We have the best guides to guide you.
                        We can ensure your best experience of travelling and safety
                        at the most possible cost.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;