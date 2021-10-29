import React from 'react';
import './Reviews.css';

const Reviews = () => {

    return (
        <div className='review'>
            <h2>Travellers Say</h2>
            <h1 className='title'>What our Travellers say about us</h1>
            <div className="container">
                <div className="flex">
                   <div className="card">
                       <div className="card-img">
                           <img src="https://yt3.ggpht.com/ytc/AKedOLTBLMf4tq8iRjYjbmOPzLlQbD31_D2E4AOSmFPGzw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                        </div>
                           <h2>Jhankar Mahbub</h2>
                           <h3>Traveller</h3>
                           <p>I have travelled with this agency several times and never been disappointed with their service and hope you will not be either. <br /> KI ACHE AR JIBONE!!!</p>
                    </div>
                    <div className="card">
                       <div className="card-img">
                           <img src="https://pbs.twimg.com/profile_images/707989406813134850/nA5P4O1m_400x400.jpg" alt="" />
                        </div>
                           <h2>Ema John</h2>
                           <h3>Traveller</h3>
                           <p>I am 100% staisfied with their service. Best tour at the most possible cost.</p>
                    </div>
                    <div className="card">
                       <div className="card-img">
                           <img src="https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg" alt="" />
                        </div>
                           <h2>John Doe</h2>
                           <h3>Traveller</h3>
                           <p>Had my best tours of my life with them. Nothing to say more. Just give them a try and you will not be disappointed.</p>
                    </div>
                   </div>
                </div>
            </div>
    )

}

export default Reviews;