import React, { useEffect, useState } from 'react'
import '../services/main.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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

    const handleRemovAppotmente = async (aid) => {
        debugger;
        try {
            const result = await axios.delete("https://freeapi.gerasim.in/api/HospitalAppointment/DeleteAppointmentByAppointment?appointmentId=" + aid)
            if (result.data.result) {
                alert(result.data.message)
                getAllApotment();
            }
            else {
                alert(result.data.message)
            }
        } catch (error) {

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
                                        <FontAwesomeIcon icon={faTimes} className="close-icon " style={{ marginLeft: '70%' }} onClick={() => handleRemovAppotmente(allapoitement.appointmentId)} />
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
                                                    <a href="#" class="btn btn-sm btn-outline-primary" onClick={() => { markDone(allapoitement.appointmentId) }}>Mark Done</a>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default AppoitementList
