import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import background from '../../Images/loginn.jpg'

const Register = () => {
  const {singInUsingGoogle}=useAuth();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [displayName,setName] = useState('');
  const [error,setError]=useState()
  const auth = getAuth();
     const handleRegistration = e =>{
      e.preventDefault();
      if(password.length<6){
        setError('password must be at least 6 characters')
        return;
      }
       console.log(email,password,displayName)
       createUserWithEmailAndPassword(auth,email,password,displayName)
       .then(result=>{
         const user = result.user;
         console.log(user);
       })
     .catch(error=>{
       setError(error.message);
     })
      
   }
   const handleEmailChange = e =>{
        setEmail(e.target.value);
        console.log(e.target.value);
   }
   const handlePasswordChange = e =>{
        setPassword(e.target.value);
        console.log(e.target.value);
   }
    const handelName = e =>{
      setName(e.target.value);
      console.log(e.target.value);
    }

    return (
        <>
        <section className="d-flex align-items-center justify-content-center py-5 px-2  "style={{ backgroundImage: `url(${background})` }} >
        <div className="container-fluid nav_bg  mt-lg-0 mb-lg-3 mb-5 mt-5">
                  <div className="col-md-3 p-4 from-container mx-auto "> 
                  <h3 className="text-center text-white">Registration</h3>
                  <form onSubmit={handleRegistration}>
  <div className="mb-2 px-2">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp "placeholder="email or phone number"required></input>
  </div>
  <div className="mb-2 px-2 text">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1"placeholder="enter your password"required></input>
  </div>
  <div className="mb-3 px-2 text">
    <label htmlFor="exampleInputText" className="form-label" >Name</label>
    <input onBlur={ handelName } type="name" className="form-control" placeholder="enter your name"required></input>
    <Button  type="submit" className="btn btn-primary mt-2 w-100"> sign up</Button>
  </div>
  <div className="text-center px-2 ">
    <strong className="text-center text-danger">{error}</strong>
  <h6>or Registration with</h6>
  <Button onClick={singInUsingGoogle} className="btn-primary  button m-3"><i className="fab fa-google text-white"></i></Button>
  <Button className="btn-primary button m-3"><i className="fab fa-facebook"></i></Button>
  <Button className="btn-primary button m-3"><i className="fab fa-github"></i></Button>
  </div>
  <div><NavLink to="/login"><p className="text-center  ">Alredy have an account?</p></NavLink></div>
</form>
                      </div>
                      
                  </div>
            
        </section>
        </>
    );
};

export default Register;