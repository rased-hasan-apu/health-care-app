import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ServiceData.css'

const ServiceData = (props) => {
        const {img,name,time,job,key}=props.service;
        
    return (
        <div>
            <Col id="card-data">
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title> service: {job}</Card.Title>
          <Card.Text>
             deration:{time}
          </Card.Text>
          <NavLink to={`/booking/${key}`}>
          <Button className="btn-pramery"> view detils </Button>
          </NavLink>
          
          
        </Card.Body> 
      </Card>
    </Col>
        </div>
    );
};

export default ServiceData;