import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Dashboard() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            debugger;
            const response = await axios.get("https://freeapi.gerasim.in/api/HospitalAppointment/GetDashboardData");
            setData(response.data.data[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {


        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const cards = [
        { title: 'Total Patients', value: data.totalPatients },
        { title: 'Total Appointments', value: data.totalAppointments },
        { title: 'Today\'s Total Appointments', value: data.todaysTotalAppointments },
        { title: 'Today\'s Total Done Appointments', value: data.todaysTotalDoneAppointments }
    ];

    return (

        <>
            <div className="container mt-4">
                <div className="row">
                    {cards.map((card, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.value}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="row">
                    {cards.map((card, index) => (
                        <div class="col-md-6 col-lg-3">

                            {/* // <div className="col-md-3" key={index}>
                            //     <div className="card text-white bg-dark mb-3">
                            //         <div className="card-body">
                            //             <h5 className="card-title">{card.title}</h5>
                            //             <p className="card-text">{card.value}</p>
                            //         </div>
                            //     </div>
                            // </div> */}
                            <div class="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                <div class="widget-content">
                                    <div class="widget-content-outer">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left pr-2 fsize-1">
                                                <div class="widget-numbers mt-0 fsize-3 text-danger">{card.title}</div>
                                            </div>

                                        </div>
                                        <div class="widget-content-left fsize-1">
                                            <div class="widget-numbers mt-0 fsize-3 text-primary">{card.value}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}


                    <div class="col-md-6 col-lg-3">
                        <div class="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                            <div class="widget-content">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left pr-2 fsize-1">
                                            <div class="widget-numbers mt-0 fsize-3 text-success">Total Patients</div>
                                        </div>
                                        <div class="widget-content-right w-100">

                                        </div>
                                    </div>
                                    <div class="widget-content-left fsize-1">
                                        <div class="text-muted opacity-6">{data.totalPatients}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                            <div class="widget-content">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left pr-2 fsize-1">
                                            <div class="widget-numbers mt-0 fsize-3 text-warning">Total appoitment</div>
                                        </div>
                                        <div class="widget-content-right w-100">

                                        </div>
                                    </div>
                                    <div class="widget-content-left fsize-1">
                                        <div class="text-muted opacity-6">{data.totalAppointments}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                            <div class="widget-content">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left pr-2 fsize-1">
                                            <div class="widget-numbers mt-0 fsize-3 text-info">Todays  TotalAppointments</div>
                                        </div>
                                        <div class="widget-content-right w-100">

                                        </div>
                                    </div>
                                    <div class="widget-content-left fsize-1">
                                        <div class="text-muted opacity-6"> {data.todaysTotalAppointments}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                            <div class="widget-content">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left pr-2 fsize-1">
                                            <div class="widget-numbers mt-0 fsize-3 text-danger">Todays Total Done Appoitment</div>
                                        </div>

                                    </div>
                                    <div class="widget-content-left fsize-1">
                                        <div class="widget-numbers mt-0 fsize-3 text-primary">{data.todaysTotalDoneAppointments}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard
