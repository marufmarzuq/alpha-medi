import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
     const [user, setUser] = useState({});
     const [error, setError] = useState('');

     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     const createAccountWithEmailPassword = (auth, email, password) => {
          createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
               const user = result.user;
               console.log(user)
          })
          .catch((error) => {
          const errorMessage = error.message;
          });
     }


     const signInUsingGoogle = () => {
          return signInWithPopup(auth, googleProvider)
     }

     const logOut = () => {
          signOut(auth).then(() => {
               setUser({})
             })
     }
     useEffect(() => {
          onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user)
               }
          })
     }, [])


     return {
          user,
          error,
          signInUsingGoogle,
          logOut,
          setUser,
          setError,
          createAccountWithEmailPassword,
          auth
     }
}
export default useFirebase;