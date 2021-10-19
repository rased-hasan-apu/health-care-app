import { useState } from "react"
import initializeAuthentication from "../../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect } from "react";
initializeAuthentication();
const useFirebase =()=>{
    const[user,setUser]=useState({});
    const [error,setError]=useState({});
    const auth =getAuth()
    const googleProvider = new GoogleAuthProvider();
   const singInUsingGoogle = ()=>{
         signInWithPopup (auth,googleProvider)
          .then(result=>{
              console.log(result.user)
              setUser(result.user);
          })
          .catch(error=>{
              setError(error.message);
          })
    }

    const logOut =()=>{
           signOut(auth)
           .then(()=>{
               setUser({})
           })
    }

    //observe user state change 
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
            }
        })
        return ()=>unsubscribe;
       },[])
    return{
        user,
        logOut,
        error,   
        singInUsingGoogle

    }
    
}
export default useFirebase;