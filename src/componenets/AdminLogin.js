// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backImage from '../services/images/back-1.png';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/AdminSlice';
import { toast } from 'react-toastify';
function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {

            dispatch(login({ username }));
            history('/dashboard');
        } else {
            toast.error('Invalid credentials');
        }
    };

    return (
        <div className="admin-login">

            <div className='row'>
                <div className='col-6'>
                    <img src={backImage} class="img-fluid" alt="Sample image" />

                </div>
                <div className='col-6'>
                    <div className='card form-control' style={{ width: "80%", height: "60%", marginLeft: "10%", marginTop: "100px" }}>
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
                                <div className="col-12 mt-5" >
                                    <button className="btn btn-success form-control" onClick={handleLogin}>Login</button>
                                </div>
                                <p ><strong style={{ color: "red" }}>Only admin needs to login</strong></p>
                                <a href="#" onClick={() => history('/newappoitement')} className='text-center'> {/* Update this line */}
                                    Patient can click here
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AdminLogin;
