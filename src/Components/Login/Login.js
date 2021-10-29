import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const {signInUsingGoogle, signInUsingGithub} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
        .catch(error =>  setError(error.message))
        .finally(() => setIsLoading(false))
    }

    return (
        <div className='login flex'>
            <h3>this is login</h3>
            <button onClick={handleGoogleLogin}>Google Sign in</button>
            {/* <button onClick={signInUsingGithub}>Github Sign in</button> */}
        </div>
    );
};

export default Login;