import React from 'react';
import '../services/main.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from '../store/slices/AdminSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navabar() {
  const user = useSelector((state) => state.admin.user);
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleLogout=()=>{
    dispatch(logout());
    history("/")
  }

  return (
    <>
      <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {user && user.username === 'admin' ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/newappoitement">
                    New Appointment
                  </Link>
                </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/appoitmentlist">
                      Appointment List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/patientlist">
                      Patient List
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/newappoitement">
                    New Appointment
                  </Link>
                </li>
              )}
            </ul>
            {
                user && user.username === 'admin'&&<form className="d-flex">
                <button className="btn btn-outline-success" type="button" onClick={handleLogout}>
                  Logout
                </button>
              </form>
            }
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navabar;
