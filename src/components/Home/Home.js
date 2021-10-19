import { Carousel, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import slide1 from '../../Images/slade6.jpg'
import slide2 from "../../Images/slader99.jpg"
import slide3 from '../../Images/slader23.jpg'
import './Home.css'
import { NavLink } from 'react-router-dom';
import Doctors from '../Doctors/Doctors';
import Sedule from '../Sedule/Sedule';
import Directors from '../Directors/Directors';
const Home = () => {
    const [doctors,setDoctors]=useState([]);
    const[sedules,setSedules]=useState([]);
    const[dierectors,setDierectors]=useState([]);

    useEffect(()=>{
        fetch('./fackdata.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data.Doctor))
    },[]);

    useEffect(()=>{
        fetch('./fackdata.json')
        .then(res=>res.json())
        .then(data=>setSedules(data.Sedule))
    },[]);
    useEffect(()=>{
        fetch('./fackdata.json')
        .then(res=>res.json())
        .then(data=>setDierectors(data.Directors))
    },[]);
    return (
        <>
         <section id="header"className="d-flex align-items-center justify-content-center ">
        <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
              <div className="row">
                  <div id="header-style"className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 mt-5 "> 
                  <Carousel fade id="slide-cotainer" className=" mt-5">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption className="justify-content-center align-items-center mx-auto mb-5">
      <h3  className="mb-5">Heare your most importent health tips</h3>
      <NavLink to="/services"className="btn-get-started">view detils</NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Second slide"
    />

    <Carousel.Caption className="justify-content-center align-items-center mx-auto mb-5">
    <h3  className="mb-5">Heare your most importent health tips</h3>
      <NavLink to="/services"className="btn-get-started">view detils</NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Third slide"
    />

    <Carousel.Caption className="justify-content-center align-items-center mx-auto mb-5">
    <h3  className="mb-5">Heare your most importent health tips</h3>
      <NavLink to="/services"className="btn-get-started">view detils</NavLink>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                      </div>
                      <div className="col-lg-6 order-2 ordegr-lg-2 header-img mt-5">
                      <h2 className="mt-5 p-2"> 
                      A person who has good physical health is likely to have bodily functions and processes working at their peak.<strong className="brand-name">Grow your health with OXyKid <i class="fas fa-ambulance"></i></strong>

                      </h2>
                      <h5 className="my-3">
                         <strong>PatientPop is the leader in practice growth with the only all-in-one solution that empowers healthcare providers to improve every digital touchpoint of the patient journey. As experts in the healthcare technology space, PatientPop makes it easy for providers to thrive in the consumerization of healthcare and promote their practice online, attract patients, and retain them for life.</strong>
                      </h5>
                      <div className="mt-3">
                       <NavLink to="/services"className="btn-get-started ">
                           Get started
                       </NavLink>
                      </div>
                      </div>
                  </div>
              </div>
            </div>

        </div>
        </section>

        <section>
        <h6 className="text-center mt-5"> Doctors</h6>
        <h3 className="text-center mt-3 mb-5">Top specialist of Disease and disorder</h3>
        <div>
               <div className="container mt-4">
               <Row xs={1} md={4} className="g-4 mb-3"> 
                {
                  doctors.map(doctor=><Doctors
                  key={doctor.key}
                  doctor={doctor}
                  ></Doctors>)
                }
                </Row>
               </div>
           </div>
        </section>
        <section>
        <h6 className="text-center mt-5">Doctors sedule</h6>
        <h3 className="text-center mt-3 mb-5">Meet our specialist</h3>
        <div>
               <div className="container mt-4">
               <Row xs={1} md={3} className="g-4 mb-3"> 
                {
                  sedules.map(sedule=><Sedule
                  key={sedule.key}
                  sedule={sedule}
                  ></Sedule>)
                }
                </Row>
               </div>
           </div>
        </section>
        <section>
        
        <h3 className="text-center mt-3 mb-5"> Director of the organization </h3>
        <div>
               <div className="container mt-4">
               <Row xs={1} md={4} className="g-4 mb-3"> 
                {
                  dierectors.map(dierector=><Directors
                  key={dierector.key}
                  dierector={dierector}
                  ></Directors>)
                }
                </Row>
               </div>
           </div>

        </section>
          
        </>
    );
};

export default Home;