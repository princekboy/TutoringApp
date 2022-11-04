import React, { useState } from 'react';
import {
  MDBBtn
} from 'mdb-react-ui-kit';
import Usermale from '../components/images/user-male.png'

export default function TutorSidebar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <React.Fragment>
        <div className=''>
        <center><img src={Usermale} className='rounded-circle img-fluid w-50 img-responsive'></img>
        <h4 className='text-black'>Jackson Samuel</h4>
        <h6>Ph.D Computer Science</h6>
        </center>
        <div className='mt-5'>
            <MDBBtn block tag="a" href='/tutor' className='btn-md text-start mb-2'><i className='fas fa-tachometer-alt me-2'></i> Dashboard</MDBBtn>
            <MDBBtn block tag="a" href='/myappnt' className='btn-md text-start mb-2'><i className='fas fa-list me-2'></i> View Appointments</MDBBtn>
            <MDBBtn block tag="a" href='/students' className='btn-md text-start mb-2'><i className='fas fa-user-graduate me-2'></i> View Student</MDBBtn>
            <MDBBtn block tag="a" href='/myprofile' className='btn-md text-start mb-2'><i className='fas fa-user me-2'></i> View Profile</MDBBtn>
            <MDBBtn block tag="a" href='/mysettings' className='btn-md text-start mb-2'><i className='fas fa-cog me-2'></i> Settings</MDBBtn>
        </div>
        </div>
    </React.Fragment>
  );
}