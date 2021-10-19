import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './ServiceData.css'

const ServiceData = (props) => {
        const {img,name,time,job}=props.service;
        
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
          <Button className="btn-pramery"> view detils </Button>
          
        </Card.Body> 
      </Card>
    </Col>
        </div>
    );
};

export default ServiceData;