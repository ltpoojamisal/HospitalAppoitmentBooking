import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Spinner, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AgGridReact } from 'ag-grid-react';
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../services/patient.css';
import { toast } from 'react-toastify';

function Paitent() {
    const [rowData, setRowData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setModal] = useState(false);
    const [validationerror, setvalidationerror] = useState(false);
    const [patientObj, setPatientObj] = useState({
        "patientId": 0,
        "name": "",
        "mobileNo": "",
        "city": "",
        "age": 0,
        "gender": ""
    })
    const restPatientObj = () => {
        setPatientObj({
            "patientId": 0,
            "name": "",
            "mobileNo": "",
            "city": "",
            "age": 0,
            "gender": ""
        })
    }
    /************** Save patient */
    const readPaitentobj = (event, key) => {
        setPatientObj(prev => ({ ...prev, [key]: event.target.value }))
    }

    const save = async () => {
        try {
            debugger
            setvalidationerror(true);
            if (patientObj.name != '' && patientObj.city != '' && patientObj.gender != '' && patientObj.mobileNo != '' && patientObj.age != 0) {
                const result = await axios.post("https://freeapi.gerasim.in/api/HospitalAppointment/AddNewPatient", patientObj)
                if (result.data.result) {
                    toast.success(result.data.message)
                    restPatientObj();
                    getAllPaitent();
                }
                else {
                    toast.error(result.data.message)
                }
                setvalidationerror(false);
            }

        } catch (error) {
            toast.error(error);
        }

    }
    /***************** Update Patient */
    const editPatient = (pobj) => {
        setPatientObj(pobj);
        handleModalOpen();

    }
    const updatePatient = async () => {
        debugger;
        const result = await axios.put("https://freeapi.gerasim.in/api/HospitalAppointment/UpdatePatient", patientObj)
        if (result.data.result) {
            toast.success(result.data.message)
            handleModalclose();
            restPatientObj();
            getAllPaitent();
        }
        else {
            toast.error(result.data.message)
        }
    }
    /*************** Modal Close And Open */
    const handleModalOpen = () => {
        setModal(true)
    }
    const handleModalclose = () => {
        setModal(false)
        restPatientObj();
    }
    /************* Delete Patient Data */
    const deletePaitent = async (patid) => {
        try {
            debugger;
            const result = await axios.delete("https://freeapi.gerasim.in/api/HospitalAppointment/DeletePatientByPatienId?patientId=" + patid)
            if (result.data.result) {
                toast.success(result.data.message)
                getAllPaitent();
                handleModalclose();
            }
            else {
                toast.error(result.data.message)
            }
        }
        catch (error) {
            toast.error(error)
        }


    }

    const CustomButtonComponent = (props) => {
        return (
            <React.Fragment>
                <Button
                    variant="success"
                    className="btn-sm m-1"
                    onClick={() => editPatient(props.data)}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deletePaitent(props.data.patientId)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </React.Fragment>
        );
    }

    const columnDefs = [
        {
            headerName: "Sr.No",
            field: 'serialNumber',
            valueGetter: (params) => params.node.rowIndex + 1,
            width: 100, // adjust width as needed
            suppressSizeToFit: true,
        },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Mobile No', field: 'mobileNo' },
        { headerName: 'City', field: 'city' },
        { headerName: 'Age', field: 'age' },
        { headerName: 'Gender', field: 'gender' },
        { headerName: "Action", cellRenderer: CustomButtonComponent }
    ];

    const defaultColDef = {
        flex: 1,
    };
    /********** Get All Paitent Data */
    const getAllPaitent = async () => {
        setLoading(true);
        try {
            const result = await axios.get("https://freeapi.gerasim.in/api/HospitalAppointment/GetAllPatients");
            if (result.data && result.data.data) {
                setRowData(result.data.data);
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            console.error(error);
            toast.error(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllPaitent();
        restPatientObj();
    }, []);

    return (
        <>
            <div className='row'>
                <div className='col-md'>
                    <div className="row mt-3 container-fluid">
                        <div className="row mt-3 mb-5">
                            <div className="col-12">
                                <Card>
                                    <Card.Header className="d-flex justify-content-between bg-primary">
                                        <Card.Title className='text-white'>
                                            Patient List
                                        </Card.Title>
                                        <Button onClick={handleModalOpen}><FontAwesomeIcon icon={faPlus} /></Button>
                                    </Card.Header>
                                    <Card.Body className="d-flex justify-content-center">
                                        {loading ? (
                                            <div className="d-flex justify-content-center align-items-center" style={{ height: 500 }}>
                                                <Button variant="primary" disabled>
                                                    <Spinner
                                                        as="span"
                                                        animation="grow"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                    Loading...
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className="ag-theme-alpine ag-theme-custom" style={{ height: 400, width: '100%' }}>
                                                <AgGridReact
                                                    columnDefs={columnDefs}
                                                    rowData={rowData}
                                                    pagination={true}
                                                    paginationPageSize={5}
                                                    defaultColDef={defaultColDef}
                                                />
                                            </div>
                                        )}
                                    </Card.Body>
                                    <Card.Footer />
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <Modal show={show} onHide={handleModalclose} backdrop="static" keyboard={false}>

                        <Modal.Header closeButton className='custom-card-header bg-primary  text-white'>
                            <Modal.Title>

                                {
                                    patientObj.patientId == 0 && <h4>Add Patient</h4>
                                }
                                {
                                    patientObj.patientId != 0 && <h4>Update Patient</h4>
                                }</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="row my-2">
                                    <div className='col-md-6'>
                                        <label>Name </label>
                                        <input type="text" className='form-control my-2' placeholder='Enter Name'
                                            value={patientObj.name} onChange={(e) => { readPaitentobj(e, 'name') }} />
                                        {
                                            validationerror && patientObj.name == '' && <div className='text-danger'>
                                                Name is required
                                            </div>
                                        }
                                    </div>
                                    <div className='col-md-6'>
                                        <label>City </label>
                                        <input type="text" className='form-control my-2' placeholder='Enter City'
                                            value={patientObj.city} onChange={(e) => { readPaitentobj(e, 'city') }} />
                                        {
                                            validationerror && patientObj.city == '' && <div className='text-danger'>
                                                City is required
                                            </div>
                                        }
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Mobile No </label>
                                        <input type="text" className='form-control my-2' placeholder='Enter Mobile '
                                            value={patientObj.mobileNo} onChange={(e) => { readPaitentobj(e, 'mobileNo') }} />
                                        {
                                            validationerror && patientObj.mobileNo == '' && <div className='text-danger'>
                                                MobileNo is required
                                            </div>
                                        }
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Age </label>
                                        <input type="text" className='form-control my-2' placeholder='Enter Age'
                                            value={patientObj.age} onChange={(e) => { readPaitentobj(e, 'age') }} />
                                        {
                                            validationerror && patientObj.age == '' && <div className='text-danger'>
                                                Age is required
                                            </div>
                                        }
                                    </div>
                                    {
                                        patientObj.patientId === 0 && <div className='col-md-6'>
                                            <label>Gender </label>
                                            <div class="mb-0">
                                                <input type="radio" id="form3Example1c" value="male" name="gender" onChange={(e) => { readPaitentobj(e, 'gender') }} />
                                                Male
                                                <input type="radio" id="form3Example1c" value="female" name="gender" onChange={(e) => { readPaitentobj(e, 'gender') }} />
                                                FeMale
                                            </div>
                                        </div>
                                    }


                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                {
                                    patientObj.patientId == 0 &&
                                    <Button variant='success' onClick={save}>
                                        {loading ? 'Saving...' : 'ADD'}
                                    </Button>

                                }
                                {
                                    patientObj.patientId == 0 && <Button variant='secondary' className='m-2' onClick={restPatientObj} >Reset</Button>
                                }
                                {
                                    patientObj.patientId !== 0 &&
                                    <Button variant='success' onClick={updatePatient}> {loading ? 'Updating...' : 'Update'}</Button>

                                }


                            </div>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    );
}

export default Paitent;
