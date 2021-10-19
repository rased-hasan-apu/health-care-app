import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import background from '../../Images/loginn.jpg'
import './Register.css'

const Register = () => {
  const {singInUsingGoogle}=useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri =location.state?.from || '/home'
  const handleGoogleLogin = ()=>{
    singInUsingGoogle()
    .then(result=>{
       history.push(redirect_uri);
    })
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

 

  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }

  
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }

  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }
 
 
 

    return (
        <>
        <section className="d-flex align-items-center justify-content-center py-5 px-2  "style={{ backgroundImage: `url(${background})` }} >
        <div className="container-fluid nav_bg  mt-lg-0 mb-lg-3 mb-5 mt-5">
                  <div className="col-md-3 p-4 from-container mx-auto "> 
                  <h3 className="text-center text-white">{isLogin?'Login':'Register'}</h3>
                  <form onSubmit={handleRegistration}>
  <div className="mb-2 px-2">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp "placeholder="email or phone number"required></input>
  </div>
  <div className="mb-2 px-2 text">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1"placeholder="enter your password"required></input>
  </div>
  <div class="mb-3 form-check">
    <input onChange={toggleLogin} type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" htmlFor="exampleCheck1">Already registar?</label>
  </div>
  <div className="mb-3 px-2 text">
    <Button  type="submit" className="btn btn-primary mt-2 w-100"> {isLogin?'Login':'Registar'}</Button>
  </div>
  <div className="text-center px-2 ">
    <strong className="text-center text-danger">{error}</strong>
  <h6>or Registration with</h6>
  <Button onClick={handleGoogleLogin} className="btn-primary  button m-3"><i className="fab fa-google text-white"></i></Button>
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