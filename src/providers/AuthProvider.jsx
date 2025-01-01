import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";


export const authContext = createContext()

const AuthProvider = ({ children }) => {

    // login user info save korar jonno ekta state nite hobe
    const [user, setUser] = useState(null);

     // loading korci jate reload marle login page ea na niye ja
     const [loading, setLoading] = useState(true);

    // google provider 
    const googleProvider = new GoogleAuthProvider();

    // register
    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const handleGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // update profile
    const manageProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
    }

    // logout
    const handleLogout = () => {
        return signOut(auth)
    }
    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        user,
        setUser,
        handleLogout,
        loading,
        manageProfile,
        

    }

   // need observer najor rakhar jonno auth er upor reload marleao asbe user information
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false);

        return() => {
            unsubscribe();
        }
    })
   },[])    
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    children
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;