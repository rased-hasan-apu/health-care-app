import React from 'react';

const Footer = () => {
    return (
       <>
       <div className="bg-dark">
<div id="footer" className="text-white d-flex align-items-center justify-content-center">
  <div className="row  container p-3  ">
    <div className="col-md-4 p-2">
    
        <h3 className="my-3"><i class="fas fa-heartbeat"></i> OyKid</h3>
        <p className="componentOne"><strong>A LITTLE SOMETHING ABOUT US </strong><br />
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <h5>Follow Us</h5>
            <div id="icon-style">
            <i className="fab fa-facebook-square mx-2"></i> 
            <i className="fab fa-twitter mx-2"></i>
            <i className="fab fa-instagram mx-2"></i>
            <i className="fab fa-invision mx-2"></i>
            </div>
    </div>
    <div className="col-md-4 p-3 "id="catagory">
        <h3 className="my-3 mx-2">Categories</h3>
        <ul className="mx-2">
            <li>Gynaecology</li>
            <li>psychologist</li>
            <li>bone specialist</li>
            <li>cardiologyst</li>
            <li>neurologist</li>
           
        </ul>
    </div>
    <div className="col-md-4 p-2" id="contruct-icon">
       <h3 className="my-3">Contruct Us</h3>
       <p><i className="fas fa-map-marker-alt mx-2"></i>250/A Oval Street,london</p>
       <p><i className="fas fa-envelope mx-2"></i>support@example.com</p>
       <p><i className="fas fa-phone mx-2"></i>+98 12345 67890</p>
       <p>Feel free to contruct us</p>
    </div>
    
    
  </div>
</div>
<div className="text-center text-white p-2"><strong >All The Copyright © OXyKid </strong> </div>


        </div>
       </>
    );
};

export default Footer;