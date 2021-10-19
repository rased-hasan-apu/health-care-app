import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceData from '../ServiceData/ServiceData';

const Service = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[]);
    return (
        <div>
        <h1 className="text-center p-5 mt-5"> Here our top level services </h1>
        <div className="container pb-4">
        <Row xs={1} md={3} className="g-4"id="cardData-style"> 
            {
              services.map(service=><ServiceData 
                key={service.key}
                service={service}></ServiceData>)
            }
            </Row>
        </div>
    </div>
    );
};

export default Service;