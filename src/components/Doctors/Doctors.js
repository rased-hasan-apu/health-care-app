import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctors.css'
const Doctors = (props) => {
    const {img,job,name}=props.doctor;
    return (
        <>
        <div>
        <Col id="card-img-style">
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="mx-2">{name}</Card.Title>
          <Card.Text  className="mx-2">
          specialist: {job}
          </Card.Text> 
        </Card.Body>
      </Card>
    </Col>
        </div>
        </>
    );
};

export default Doctors;