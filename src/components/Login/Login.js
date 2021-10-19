import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import background from '../../Images/loginn.jpg'
import './Login.css'
const Login = () => {
  const {singInUsingGoogle}=useAuth();
    return (
        <>
        <section className="d-flex align-items-center justify-content-center py-5 px-2  "style={{ backgroundImage: `url(${background})` }} >
       <div className="container-fluid nav_bg mb-lg-3 mt-lg-0 mb-5 mt-5">
                 <div className="col-md-3 p-4 from-container mx-auto "> 
                 <h3 className="text-center text-white">Login</h3>
                 <form>
 <div className="mb-1 px-2">
   <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp "placeholder="email or phone number"></input>
   <div id="emailHelp" className="form-text">Becarefull never share your email with anyone else.</div>
 </div>
 <div className="mb-1 px-2 text">
   <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
   <input type="password" className="form-control" id="exampleInputPassword1"placeholder="enter your password"></input>
   <div id="emailHelp" className="form-text">Becarefull never share your password with anyone else.</div>
   <button type="button" className="btn btn-primary w-100">login</button>
   <NavLink to="/registration"><p className="text-center p-2 ">don't have accont please register?</p></NavLink>
 </div>
 <div className="text-center px-2 ">
 <h6>or sign in using</h6>
 <Button  onClick={singInUsingGoogle} className="btn-primary  button m-3"> <i className="fab fa-google text-white"></i></Button>
 <Button className="btn-primary button m-3"><i className="fab fa-facebook"></i></Button>
 <Button className="btn-primary button m-3"><i className="fab fa-github"></i></Button>
 </div>
</form>
                     </div>
                     
                 </div>
           
       </section>
       </>
    );
};

export default Login;