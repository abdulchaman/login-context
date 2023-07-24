import React from 'react';
import { useUserContext } from '../context/userContext';
const Home = () => {
  const {user,logOut} = useUserContext();
  return (
    <div className="card">
      <div className="card-body">
        Hello username {user.name}
      </div>
      <button className='btn btn-danger' onClick={logOut}>Logout</button>
    </div>
  )
}

export default Home;