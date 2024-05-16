import React, { useState } from 'react'
import '../services/main.css';
import backImage from '../services/images/back-1.png';
import axios from 'axios';
function NewAppoitment() {
    const [appotmentObj, setAppoitementObj] = useState({
        "name": "",
        "mobileNo": "",
        "city": "",
        "age": 0,
        "gender": "",
        "appointmentDate": "",
        "appointmentTime": "",
        "isFirstVisit": true,
        "naration": ""
    })
    const readAppotmentobj = (event, key) => {
      //  const value = key === 'isFirstVisit' ? event.target.checked : event.target.value;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setAppoitementObj(prev => ({ ...prev, [key]: value }));
 }

    const bookappoitment = async () => {
        debugger
        const result = await axios.post("https://freeapi.gerasim.in/api/HospitalAppointment/AddNewAppointment", appotmentObj);
        if (result.data.result) {
            alert(result.data.message)
        }
        else {
            alert(result.data.message)
        }
    }
    return (
        <>
            <div class="container-fluid">
                <section class="vh-100" >
                    <div class="container-fluid h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-lg-12 col-xl-11 mb-5">
                                <div class="card text-black" style={{ borderradius: "25px" }}>
                                    <div class="card-body p-md-1">
                                        <div class="row justify-content-center">
                                            <div class="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                                                <p class="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-2">New Appointment</p>
                                                <form class="mx-1 mx-md-4">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <div class="d-flex flex-row align-items-center mb-4">
                                                                <i class="fa fa-user fa-lg me-3 fa-fw"></i>
                                                                <div class="   mb-0">
                                                                    <input type="text" id="form3Example1c"
                                                                        placeholder="Enter Name" class="form-control" onChange={(event) => { readAppotmentobj(event, 'name') }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="d-flex flex-row align-items-center mb-4">
                                                                <i class="fa fa-phone fa-lg me-3 fa-fw"></i>
                                                                <div class="   mb-0">
                                                                    <input type="text" id="form3Example1c"
                                                                        placeholder="Enter Mobile No" class="form-control" onChange={(event) => { readAppotmentobj(event, 'mobileNo') }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div class="d-flex flex-row align-items-center mb-4">
                                                                <i class="fa fa-map-marker fa-lg me-3 fa-fw"></i>
                                                                <div class="   mb-0">
                                                                    <input type="text" id="form3Example1c"
                                                                        placeholder="Enter City" class="form-control" onChange={(event) => { readAppotmentobj(event, 'city') }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div class="d-flex flex-row align-items-center mb-4">
                                                                <i class="fa fa-calendar fa-lg me-3 fa-fw"></i>
                                                                <div class="   mb-0">
                                                                    <input type="text" id="form3Example1c"
                                                                        placeholder="Enter Age" class="form-control" onChange={(event) => { readAppotmentobj(event, 'age') }} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <div class="d-flex flex-row align-items-center mb-4">
                                                                <i class="fa fa-plus-circle fa-lg me-3 fa-fw"></i>
                                                                <div class=" flex-fill mb-0">
                                                                    <input type="checkbox" id="form3Example3c" onChange={(event) => { readAppotmentobj(event, 'isFirstVisit') }} /> Is First
                                                                    Time
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="d-flex flex-row align-items-center mb-4">

                                                                <div class="   mb-0">
                                                                    <input type="radio" id="form3Example1c" value="Male" name="gender" onChange={(event) => { readAppotmentobj(event, 'gender') }} />
                                                                    Male
                                                                    <input type="radio" id="form3Example1c" value="FeMale"  name="gender" onChange={(event) => { readAppotmentobj(event, 'gender') }} /> Fe
                                                                    Male
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="row">
                                                        <div class="col-6">
                                                            <div class="d-flex flex-row align-items-center mb-4">
                                                                <i class="fa fa-user fa-lg me-3 fa-fw"></i>
                                                                <div class="   mb-0">
                                                                    <input type="date" id="form3Example1c"
                                                                        class="form-control" onChange={(event) => { readAppotmentobj(event, 'appointmentDate') }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="d-flex flex-row align-items-center mb-4">
                                                                <i class="fa fa-clock-o fa-lg me-3 fa-fw"></i>
                                                                <div class="   mb-0">
                                                                    <input type="text" id="form3Example1c"
                                                                        placeholder="Enter Appointment Time"
                                                                        class="form-control" onChange={(event) => { readAppotmentobj(event, 'appointmentTime') }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center mb-4">
                                                        <i class="fa fa-file-text fa-lg me-3 fa-fw"></i>
                                                        <div class=" flex-fill mb-0">
                                                            <textarea placeholder="Enter Naration" rows="3"
                                                                class="form-control" onChange={(event) => { readAppotmentobj(event, 'naration') }}></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="button" class="btn btn-primary btn-lg" onClick={bookappoitment}>Book
                                                            Appointment</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div
                                                class="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                                                <img src={backImage} class="img-fluid" alt="Sample image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default NewAppoitment
