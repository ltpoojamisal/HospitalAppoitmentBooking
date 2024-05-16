import React from 'react'
import '../services/main.css';
import { Link } from 'react-router-dom';
function Navabar() {
    return (
        <>
          <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">
                            Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/newappoitement">New Appointment</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/appoitmentlist"> Appointment List</Link>
                    </li>

                </ul>
                <form class="d-flex">
                    <button class="btn btn-outline-success" type="button">Logout</button>
                </form>
            </div>
        </div>
    </nav>
    
        </>
    )
}

export default Navabar
