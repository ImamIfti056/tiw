import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container flex">
                <div className='follow'>
                    <h1>Travel Agency</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Natus,  perferendis quam, doloremque eligendi vitae illo?</p>
                    <h2>Follow Us</h2>
                    <p>
                        <span><i class="fab fa-facebook"></i></span>
                        <span><i class="fab fa-instagram"></i></span>
                        <span><i class="fab fa-twitter"></i></span>
                    </p>
                </div>
                <div className='contact'>
                    <h2>Contact Us</h2>
                    <div className='flex'>
                        <i class="fas fa-phone"></i>
                        <p>+01852-1265122 <br />+01852-1265122</p>
                    </div>
                    <div className='flex'>
                        <i class="far fa-paper-plane"></i>
                        <p>info@example.com <br />support@example.com</p>
                    </div>
                    <div className='flex'>
                        <i class="fas fa-map-marker-alt"></i>
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
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <br />
                    <i class="fab fa-cc-discover"></i>
                    <i class="fab fa-cc-stripe"></i>
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