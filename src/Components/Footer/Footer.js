import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container flex">
                <div className='follow'>
                    <h1>Travel Agency</h1>
                    <p>We ensure your best experience of travelling and safety <br /> at the most possible cost.</p>
                    <h2>Follow Us</h2>
                    <p>
                        <span><i className="fab fa-facebook"></i></span>
                        <span><i className="fab fa-instagram"></i></span>
                        <span><i className="fab fa-twitter"></i></span>
                    </p>
                </div>
                <div className='contact'>
                    <h2>Contact Us</h2>
                    <div className='flex'>
                        <i className="fas fa-phone"></i>
                        <p>+01852-1265122 <br />+01852-1265122</p>
                    </div>
                    <div className='flex'>
                        <i className="far fa-paper-plane"></i>
                        <p>info@example.com <br />support@example.com</p>
                    </div>
                    <div className='flex'>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>2752 Willison Street <br /> Eagan, United State</p>
                    </div>
                </div>
                <div className='support'>
                    <h2>Support Us</h2>
                    <h3>Contact Us</h3>
                    <h3>About Us</h3>
                    <h3>Destinations</h3>
                    <h3>Our Blogs</h3>
                    <h3>Package</h3>
                </div>
                <div className='payments'>
                    <h2>We Accept</h2>
                    <i className="fab fa-cc-visa"></i>
                    <i className="fab fa-cc-mastercard"></i>
                    <br />
                    <i className="fab fa-cc-discover"></i>
                    <i className="fab fa-cc-stripe"></i>
                </div>
            </div>
            <hr />
            <p className="copyright">
                &copy; copyright <span>iiifti</span> 2021, all rights reserved.
            </p>
        </div>
    );
};

export default Footer;