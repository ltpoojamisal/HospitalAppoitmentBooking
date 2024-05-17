// AdminLogin.js
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            history('/admin-dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="admin-login">
            {/* <h2>Admin Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button> */}
            <div className='row'>
                <div className='card' style={{width:"50%",marginLeft:"300px"}}>
                    <div className='card-header bg-primary'>
                        <div className='card-title'>
                           <h2 className='text-white'>Login</h2> 
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className="row">
                            <div className='col-12'>
                                <label>User Name</label>
                                <input type="text" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-12">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12" >
                                <button className="btn btn-success form-control" onClick={handleLogin}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
