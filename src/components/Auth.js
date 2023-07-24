import React from 'react';
import Home from './Home';
import Login from './Login';
import { useUserContext } from '../context/userContext';
const Auth = () => {
    const{user} = useUserContext();
  return (
        <>
            {
                user.isGuest?(<Login></Login>):(<Home></Home>)
            }
        </>
  )
}

export default Auth;