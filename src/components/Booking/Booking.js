import React from 'react';
import { useParams } from 'react-router';
import './Booking.css'
const Booking = () => {
    const {serviceId}=useParams();
    return (
        <div>
             <div className="style">
            <h2 className="text-center mt-5">this is booking{serviceId} </h2>
        </div>
        </div>
    );
};

export default Booking;