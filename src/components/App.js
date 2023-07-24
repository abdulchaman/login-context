import React, { useContext } from 'react';
import Header from './Header';
import Auth from './Auth';
import { UserContextProvider } from '../context/userContext';

const App = () => {
    return (
        <>
            <UserContextProvider>
                <Header></Header>
                <div className='container'>
                    <Auth></Auth>
                </div>
            </UserContextProvider>
        </>
    )
}

export default App