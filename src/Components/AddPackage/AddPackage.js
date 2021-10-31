import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import './AddPackage.css';

const AddPackage = () => {

    const {user} = useAuth();

    const nameRef = useRef();
    const priceRef = useRef();
    const desRef = useRef();
    const imgRef = useRef();
    const durationRef = useRef();
    const totalRatingsRef = useRef();
    const ratingRef = useRef();

    const handleAddPackage = e => {

    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const description = desRef.current.value;
    const totalRatings = totalRatingsRef.current.value;
    const img = imgRef.current.value;
    const ratings = ratingRef.current.value;
    const duration = durationRef.current.value;

    const newPackage = {name, price, description, img, ratings, duration, totalRatings, addedBy: user?.email};
    console.log(newPackage);
        fetch('https://arcane-sierra-20746.herokuapp.com/packages',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
        .then(res=> res.json())
        .then(data => {
            alert('Tour Package Added Successfully');
            e.target.reset();
        })

        e.preventDefault();
    }

    return (
        <div className='add-package'>
            <div className="container">
                <h1 className="title">Add New Tour Package</h1>
                <p>Want to add a new tour package to our website? All you have to do this is just fillup this form!</p>
                <hr />
                <div className="form">
                    <form onSubmit={handleAddPackage}>
                        <div>
                            <input type="text" placeholder='Place Name' ref={nameRef} required />
                        </div>
                        <div>
                            <input type="text" placeholder='Image Url of the place' ref={imgRef} required />
                        </div>
                        <div>
                            <input type="number" placeholder='Cost per person(Dollar)' ref={priceRef} required />
                        </div>
                        <div>
                            <input type="number" placeholder='Tour Duration(Days)' ref={durationRef} required />
                        </div>
                        <div>
                            <input type="number" placeholder='How many people visits there per month?' required ref={totalRatingsRef} />
                        </div>
                        <div>
                            <input type='text' placeholder='Rating' ref={ratingRef} required />
                        </div>
                        <div>
                            <textarea placeholder='Describe about this place...' rows="10" ref={desRef} required></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Add Package" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;