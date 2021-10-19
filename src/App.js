import './App.css';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import Contruct from './components/Contruct/Contruct';
import Service from './components/Services/Service';
import  NotFound  from './components/NotFound/NotFound';
import AuthProvider from './Hooks/AuthProvider/AuthProvider';




function App() {
  return (
    <>
     <AuthProvider>
       
   <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/registration">
          <Register></Register>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contract">
          <Contruct></Contruct>
        </Route>
        <Route path="/services">
         <Service></Service>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
      <Footer></Footer>
    </Router>
     </AuthProvider>
 
    </>
  );
}

export default App;
