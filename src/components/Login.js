import React, { useState } from 'react';
import { useUserContext } from '../context/userContext';
const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {logIn}=useUserContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        logIn(name);
        console.log(name, password);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">User Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter user name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit' className='btn btn-success'>Submit</button>
        </form>
    )
}

export default Login;