import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app)
export const AuthContext = createContext(null)
const UserProvider = ({ children }) => {
    const [loader, setLoading] = useState(true)
    const [user, setUser] = useState([])



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log('logged in User inside the auth state Observer')
            setUser(loggedUser)

            /*  if (loggedUser) {
                 axios.post('http://localhost:5000/jwt', { email: loggedUser.email })
                     .then(data => {
                         localStorage.setItem('access_token', data.data.token)
                         console.log(data)
                         setLoading(false)
                     })
             }
             else {
                 localStorage.removeItem('access_token')
             } */
        });
        return () => {
            unsubscribe()
        };
    }, [])



    const authInfo = {
        user,
        createUser,
        loader,
        updateUserProfile,
        handleGoogleLogin,
        signIn,
        LogOut
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default UserProvider;