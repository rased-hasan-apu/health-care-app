import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Directors = (props) => {
    const {img,name}=props.dierector;
    return (
        <div>
            <Col id="card-img-style">
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="mx-2">{name}</Card.Title>
          
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Directors;