import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const authContext = createContext()

const AuthProvider = ({ children }) => {

    // login user info save korar jonno ekta state nite hobe
    const [user, setUser] = useState(null);

    // loading korci jate reload marle login page ea na niye ja
    const [loading, setLoading] = useState(true);

    // google provider 
    const googleProvider = new GoogleAuthProvider();

    // use axiosPublic
    const axiosPublic = useAxiosPublic();

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
            displayName: name, photoURL: photo
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
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: remove token(if token stored in the client side: Local Storage, cashing, in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false);

            return () => {
                unsubscribe();
            }
        })
    }, [axiosPublic])
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