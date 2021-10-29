import {useEffect, useState} from 'react';
import initializeAuthentication from './../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signInUsingGithub = () => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        }) 
        .catch(error => setError(error.message))
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>setUser({}))
        .finally(() => setIsLoading(false))        
    }

    // observer user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            } else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])

    return {
        signInUsingGoogle,
        signInUsingGithub,
        isLoading,
        logOut,
        user, 
        error
    }

}

export default useFirebase;