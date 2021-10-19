import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../Images/slide1.jpg'
import img2 from '../../Images/slide2.jpg'
import img3 from '../../Images/slide3.jpg'
const About = () => {
    return (
        <div>
        <h1 className="text-center p-5 mt-4"> About Us </h1>
        <div className="container mb-5">
        <Row id="card-box" xs={1} md={3} className="g-4  ">
        <Col>
  <Card className="mt-5 cart-s">
    <Card.Img variant="" src={img1} />
    
  </Card>
</Col>
<Col>
  <Card className="cart-s">
    <Card.Img variant="mb-5" src={img2} />
    
  </Card>
</Col>
<Col>
  <Card className="mt-5 cart-s">
    <Card.Img variant="" src={img3} />
   
  </Card>
</Col>
</Row>
</div>
<div>
 <h5 className="text-center">WHO WE ARE</h5>
 <h2 className="text-center container"> We Are Providing The Best Quality Health services. <br />
 Our All Instructors and Doctors Are High Expert </h2>
 <div className="container">
 <p ><strong>A person who has good physical health is likely to have bodily functions and processes working at their peak. This is not only due not only to an absence of disease. Regular exercise, balanced nutrition, and adequate rest all contribute to good health.Health is an individual's relative level of wellness and illness, taking into account the presence of biological or physiological dysfunction, symptoms, and functional impairment.

Health perceptions (or perceived health status) are subjective ratings by the affected individual of his or her health status6. Some people perceive themselves as healthy despite suffering from one or more chronic diseases, while others perceive themselves as ill when no objective evidence of disease can be found.
</strong></p>
 </div>
</div>

</div>
    );
};

export default About;