import React, { useState } from 'react';
import {
  MDBBtn
} from 'mdb-react-ui-kit';
import Usermale from '../components/images/user-male.png'

export default function Sidebar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <React.Fragment>
        <div className=''>
        <center><img src={Usermale} className='rounded-circle img-fluid w-50 img-responsive'></img>
        <h4 className='text-black'>John Doe</h4>
        <h6>Computer Science Department</h6>
        </center>
        <div className='mt-5'>
            <MDBBtn block tag="a" href='/user' className='btn-md text-start mb-2'><i className='fas fa-tachometer-alt me-2'></i> Dashboard</MDBBtn>
            <MDBBtn block tag="a" href='/appointment' className='btn-md text-start mb-2'><i className='fas fa-edit me-2'></i> Book Appointment</MDBBtn>
            <MDBBtn block tag="a" href='/viewappnt' className='btn-md text-start mb-2'><i className='fas fa-list me-2'></i> View Appointments</MDBBtn>
            <MDBBtn block tag="a" href='/tutors' className='btn-md text-start mb-2'><i className='fas fa-users me-2'></i> View Tutors</MDBBtn>
            <MDBBtn block tag="a" href='/profile' className='btn-md text-start mb-2'><i className='fas fa-user me-2'></i> View Profile</MDBBtn>
            <MDBBtn block tag="a" href='/settings' className='btn-md text-start mb-2'><i className='fas fa-cog me-2'></i> Settings</MDBBtn>
        </div>
        </div>
    </React.Fragment>
  );
}