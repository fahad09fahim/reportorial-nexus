import {  createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

//  create user with email and password using firebase
   const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }
   const logIn = (email,password)=>{
   setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
   }
//------------------google authentication---------
const signInWithGoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
// -------------------logout

const logOut =()=>{
    return signOut(auth)
}

const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}
   useEffect(()=>{
const unsubscribe= onAuthStateChanged(auth, currentUser=>{
    setUser(currentUser);
})
return ()=>{
    unsubscribe()
}

   },[])
    const authInfo = {
user,
loading,
createUser,
logIn,
signInWithGoogle,
logOut,
updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;