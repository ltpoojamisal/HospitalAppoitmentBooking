import React, { useEffect, useState } from 'react'
import '../services/main.css'
import axios from 'axios';
function AppoitementList() {

    const [allapoitement, setAllapotment] = useState([]);
    const [toaysApp, setTodayApp] = useState([]);

    const getAllApotment = async () => {
        debugger
        if (toaysApp.length > 0) {
            setTodayApp([]);
        }
        const result = await axios.get("https://freeapi.gerasim.in/api/HospitalAppointment/GetAllAppointments");
        setAllapotment(result.data.data);
    }

    const getTodays = async () => {
        const result = await axios.get("https://freeapi.gerasim.in/api/HospitalAppointment/GetTodaysAppointments")
        setTodayApp(result.data.data);
    }

    const markDone = async (aid) => {
        const result = await axios.get("https://freeapi.gerasim.in/api/HospitalAppointment/MarkAppointmentDone?appointmentId=" + aid)
        if (result.data.result) {
            getAllApotment();
        }
    }
    useEffect(() => {
        getAllApotment();
    }, [])
    return (
        <>
            <div class="container-fluid">
                <div class="row pb-1">
                    <div class="col-12 text-end">
                        <button class="btn btn-success" onClick={() => { getAllApotment() }}>All </button>
                        <button class="btn btn-primary" onClick={() => { getTodays() }}>Todays </button>
                    </div>
                </div>
                <div class="row">
                    {(toaysApp.length !== 0 ? toaysApp : allapoitement)
                        .sort((a, b) => a.appointmentNo - b.appointmentNo)
                        .map((allapoitement) => {
                            return (<div class="col-lg-3">
                                <div class="card card-margin">
                                    <div class="card-header no-border">
                                        <h5 class="card-title">{allapoitement.name}</h5>
                                    </div>
                                    <div class="card-body pt-0">
                                        <div class="widget-49">
                                            <div class="widget-49-title-wrapper">
                                                <div class="widget-49-date-primary">
                                                    <span class="widget-49-date-day">{allapoitement.appointmentNo}</span>
                                                </div>
                                                <div class="widget-49-meeting-info">
                                                    <span class="widget-49-pro-title">{allapoitement.mobileNo}</span>
                                                    <span class="widget-49-meeting-time">{allapoitement.appointmentTime}</span>
                                                </div>
                                            </div>
                                            {
                                                allapoitement.isDone ? <div class="widget-49-meeting-action">
                                                    <a href="#" class="btn btn-sm btn-success"> Done</a>
                                                </div> : <div class="widget-49-meeting-action">
                                                    <a href="#" class="btn btn-sm btn-outline-primary" onClick={()=>{markDone(allapoitement.appointmentId)}}>Mark Done</a>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                    {/* <div class="col-lg-3">
                <div class="card card-margin">
                    <div class="card-header no-border">
                        <h5 class="card-title">Rohit Sharma</h5>
                    </div>
                    <div class="card-body pt-0">
                        <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                                <div class="widget-49-date-primary">
                                    <span class="widget-49-date-day">1</span> 
                                </div>
                                <div class="widget-49-meeting-info">
                                    <span class="widget-49-pro-title">Mumbai</span>
                                    <span class="widget-49-meeting-time">22 Dec 7.00 Pm</span>
                                </div>
                            </div> 
                            <div class="widget-49-meeting-action">
                                <a href="#" class="btn btn-sm btn-success"> Done</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-margin">
                    <div class="card-header no-border">
                        <h5 class="card-title">Virat Kohli</h5>
                    </div>
                    <div class="card-body pt-0">
                        <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                                <div class="widget-49-date-warning">
                                    <span class="widget-49-date-day">2</span> 
                                </div>
                                <div class="widget-49-meeting-info">
                                    <span class="widget-49-pro-title">New Mumbai</span>
                                    <span class="widget-49-meeting-time">22 dec 7.30 Pm</span>
                                </div>
                            </div>
                            
                            <div class="widget-49-meeting-action">
                                <a href="#" class="btn btn-sm btn-outline-primary">Mark Done</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-margin">
                    <div class="card-header no-border">
                        <h5 class="card-title">Suresh Raina</h5>
                    </div>
                    <div class="card-body pt-0">
                        <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                                <div class="widget-49-date-warning">
                                    <span class="widget-49-date-day">3</span> 
                                </div>
                                <div class="widget-49-meeting-info">
                                    <span class="widget-49-pro-title">New Mumbai</span>
                                    <span class="widget-49-meeting-time">22 dec 7.30 Pm</span>
                                </div>
                            </div>
                            <div class="widget-49-meeting-action">
                                <a href="#" class="btn btn-sm btn-outline-primary">Mark Done</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-margin">
                    <div class="card-header no-border">
                        <h5 class="card-title">Ankit Rao</h5>
                    </div>
                    <div class="card-body pt-0">
                        <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                                <div class="widget-49-date-primary">
                                    <span class="widget-49-date-day">4</span> 
                                </div>
                                <div class="widget-49-meeting-info">
                                    <span class="widget-49-pro-title">Mumbai</span>
                                    <span class="widget-49-meeting-time">22 Dec 8.00 Pm</span>
                                </div>
                            </div> 
                            <div class="widget-49-meeting-action">
                                <a href="#" class="btn btn-sm btn-outline-primary">Mark Done</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-margin">
                    <div class="card-header no-border">
                        <h5 class="card-title">Sachin Tendulkar </h5>
                    </div>
                    <div class="card-body pt-0">
                        <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                                <div class="widget-49-date-warning">
                                    <span class="widget-49-date-day">5</span> 
                                </div>
                                <div class="widget-49-meeting-info">
                                    <span class="widget-49-pro-title"> Mumbai</span>
                                    <span class="widget-49-meeting-time">22 dec 7.30 Pm</span>
                                </div>
                            </div>
                            
                            <div class="widget-49-meeting-action">
                                <a href="#" class="btn btn-sm btn-outline-primary">Mark Done</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-margin">
                    <div class="card-header no-border">
                        <h5 class="card-title">Aditya</h5>
                    </div>
                    <div class="card-body pt-0">
                        <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                                <div class="widget-49-date-warning">
                                    <span class="widget-49-date-day">6</span> 
                                </div>
                                <div class="widget-49-meeting-info">
                                    <span class="widget-49-pro-title">New Mumbai</span>
                                    <span class="widget-49-meeting-time">22 dec 8.30 Pm</span>
                                </div>
                            </div>
                            <div class="widget-49-meeting-action">
                                <a href="#" class="btn btn-sm btn-outline-primary">Mark Done</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                </div>
            </div>
        </>
    )
}

export default AppoitementList
