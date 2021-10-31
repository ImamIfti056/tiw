import React, { useState } from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const [isLoading, setIsLoading] = useState(true);

    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
        .catch(error =>  console.log(error.message))
        .finally(() => setIsLoading(false))
    }

    return (
        <div className='login'>
            <h1 className='title'>Sign in</h1>
            <h1 className='title'><i className="fas fa-sign-in-alt"></i></h1>
            <button className='btn btn-signIn' onClick={handleGoogleLogin}><i className="fab fa-google"></i> Continue with Google</button>
            {/* <button onClick={signInUsingGithub}>Github Sign in</button> */}
        </div>
    );
};

export default Login;