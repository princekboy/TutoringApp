import React, { useState } from 'react';
import {
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBInput, 
    MDBBtn
  } from 'mdb-react-ui-kit';

  import axios from 'axios';
  import { useParams } from 'react-router-dom';
  import { useEffect } from 'react';

export default function Profile() {
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
          <h2>Profile</h2><hr /><br></br>
          <div className='col-md-7 ms-auto me-auto'>
                <center className="mb-3"><img src={`/images/users/${getuser.photo}`} className='rounded-circle img-fluid w-25 img-responsive'/></center>
                <label className='text-start'>First Name</label>
                <MDBInput className='mb-4' type='text' disabled id='form2Example1' value={getuser.fname} label='John' />
                <label className='text-start'>Last Name</label>
                <MDBInput className='mb-4' type='text' disabled id='form2Example2' value={getuser.lname} label='Doe' />
                <label className='text-start'>Email Address</label>
                <MDBInput className='mb-4' type='email' disabled id='form2Example2' value={getuser.email} label='johndoe@gmail.com' />
                <label className='text-start'>Phone Number</label>
                <MDBInput className='mb-3' type='tel' disabled id='form3Example3' value={getuser.phone} label='+22 478 374 4338' />
                <label className='text-start'>Faculty</label>
                <select dsabled className='form-control mb-4'>
                    <option selected>Engineering</option>
                    <option>Medicine</option>
                    <option>Science</option>
                </select>
                <MDBBtn type='submit' tag="a" href="/settings" className='mb-4' block>
                    Edit Profile
                </MDBBtn>
         </div>
          {/* ============================ Just a Separator============================= */}
          </MDBCol>
        </MDBRow>
         </main>
         </MDBCol>
        </MDBRow>
        </MDBContainer>
        {/* ================================= Just a separator ============================================== */}
      </React.Fragment>
  );
}