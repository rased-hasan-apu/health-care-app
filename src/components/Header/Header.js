import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Header.css'
const Header = () => {
  const {user,logOut}=useAuth();
  
    return (
        <>
       
     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
  <div className="container-fluid">
    <NavLink to="/home" className="navbar-brand" ><i className="fas fa-heartbeat"></i><strong> OXyKid</strong></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link"  >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link" >Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/contract" className="nav-link" >Contract</NavLink>
        </li>
       
        
      </ul>
  <strong className="mx-1">{user?.displayName} </strong>
      {user?.email?

      <Button onClick={logOut} className="text-white"><i class="fas fa-sign-out-alt"></i> logOut</Button>:
        <  NavLink to="/registration" className="btn-style"><i className="fas fa-users "></i> Register/login</NavLink>
      
    }

  
    </div>
    
  </div>
  
</nav>


</>
    );
};

export default Header;