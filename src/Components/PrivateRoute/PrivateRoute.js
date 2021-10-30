import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {user, isLoading} = useAuth();

    if(isLoading){
        return(
            <div className="flex" style={{'fontSize': '24px', 'fontWeight': '700', 'padding': '20px', 'margin': '30px 0'}}>
                <span>Loading...<i className="fas fa-spinner"></i></span>
            </div>
        )
    }
    return (
        <Route
        {...rest}
        render={({location})=> user.email ? children : 
        <Redirect
        to={{
            pathname: '/login',
            state:{from: location}
        }}
        ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;