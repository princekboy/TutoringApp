import React, { useState } from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBBtn
  } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
export default function Bookappointment() {
  const [showBasic, setShowBasic] = useState(false);

  const [getuser, getUser] = useState('');

    const params = useParams();
    useEffect(() => {
      if(params.user_id == null){
          navigate("/login");
      }else if(params.user_id != null){
          axios.post('http://localhost/reactjs/sessions.php', {user_id:params.user_id, credentials: "same-origin"})
          .then(function(res){
          const userdata = res.data;
          getUser(userdata);
          })
          .catch(err => console.log(err))
      }
    }, []);

  return (
    <React.Fragment>
        <MDBContainer fluid className=''>
        <MDBRow>
         <MDBCol md='3' className='primary py-5' style={{backgroundColor: 'lightgrey'}}>
          <div className=''>
            <center><img src={`/images/users/${getuser.photo}`} className='rounded-circle img-fluid w-50 img-responsive'></img>
            <h4 className='text-black'>{getuser.fname + " " + getuser.lname}</h4>
            <h6>{getuser.faculty}</h6>
            </center>
            <div className='mt-5'>
                <MDBBtn block tag="a" href={'/user/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-tachometer-alt me-2'></i> Dashboard</MDBBtn>
                <MDBBtn block tag="a" href={'/appointment/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-edit me-2'></i> Book Appointment</MDBBtn>
                <MDBBtn block tag="a" href={'/viewappnt/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-list me-2'></i> View Appointments</MDBBtn>
                <MDBBtn block tag="a" href={'/tutors/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-users me-2'></i> View Tutors</MDBBtn>
                <MDBBtn block tag="a" href={'/profile/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-user me-2'></i> View Profile</MDBBtn>
                <MDBBtn block tag="a" href={'/settings/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-cog me-2'></i> Settings</MDBBtn>
            </div>
            </div>
         </MDBCol>
         <MDBCol md='9'>
         <main>
           <MDBRow>
          <MDBCol md="12" className='text-center my-3'>
          <h2>Book Appointment</h2><hr />
          <form>
            <label className='text-start'>Course</label>
            <MDBInput className='mb-4' type='text' id='form2Example1' label='Course' />
            <label className='text-start'>Faculty</label>
            <select className='form-control'>
                <option>Engineering</option>
                <option>Medicine</option>
                <option>Science</option>
            </select>
            <label className='text-left mt-4'>Available Tutors</label>
            <select className='form-control'>
                <option>Samuel Jackson (Ph.D Engineering)</option>
                <option>Gabriel Jude (Prof. Medicine)</option>
                <option>Selina Alex (B.Sc Science)</option>
            </select>
            <label className='text-left mt-4 mb-1'>Appointment Date</label>
            <MDBInput label='Appointment Date' id='typeText' type='date' />

            <label className='text-left mt-4 mb-1'>Appointment Time</label>
            <MDBInput label='Appointment time' className='mb-2' id='typeText' type='time' />
            <MDBBtn type='submit' className='mb-4 mt-4 btn-md'>
                   Book Appointment
            </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
         </main>
         </MDBCol>
        </MDBRow>
        </MDBContainer>
      </React.Fragment>
  );
}