import React from 'react';
import { useUserContext } from '../context/userContext';

const Header = () => {
    const {user, logOut}= useUserContext();
    console.log(user);
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" to="/">Context API</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h2 className=''>Welcome  {user.name}</h2>
                    {
                        !user.isGuest && (<button className='btn btn-danger' onClick={logOut}>Logout</button>)
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header;