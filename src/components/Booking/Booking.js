import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';
const Booking = () => {
    const {serviceId}=useParams();
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    const viewDeatils = services.find(view=>view.key===serviceId)
      

    return (
        <>
        <section className=" container style mx-auto">
            
            <div>
            <img className="mx-auto w-100" src={viewDeatils?.img} alt="" />
            <p className="text-center"> <small>{ viewDeatils?.detals}</small></p>
            </div> 
        </section>
        </>
    );
};

export default Booking;