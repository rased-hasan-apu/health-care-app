import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Sedule = (props) => {
    const {job,img,name,review,time,price} = props.sedule;
    return (
        <div>
           <Col id="card-img-style">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="mx-2">{name}</Card.Title>
          <Card.Text  className="mx-2">
          specialist: {job}
          </Card.Text> 
          <Card.Text  className="mx-2">
          review: {review}
          </Card.Text>
          <Card.Text  className="mx-2">
          visit hour: {time}
          </Card.Text> 
          <Card.Text  className="mx-2">
          Cost: {price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>  
        </div>
    );
};

export default Sedule;