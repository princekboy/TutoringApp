import React, { useState } from 'react';
import {
    MDBInput,
    MDBContainer,
    MDBBtn,
    MDBTabs,
    MDBTabsItem,
    MDBRow,
    MDBCol,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';

  import axios from 'axios';
  import { useParams } from 'react-router-dom';
  import { useEffect } from 'react';

export default function Settings() {

  const [fillActive, setFillActive] = useState('tab1');

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

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };

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
          <h2>Settings</h2><hr />
          <MDBTabs fill className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
            Change Password
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
            Edit profile
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={fillActive === 'tab1'}>
            <div className='col-md-7 ms-auto me-auto'>
                <h2 className='text-center'>Change Password</h2><br></br>
                <MDBInput className='mb-4' type='password' id='form2Example1' label='Old Password' />
                <MDBInput className='mb-4' type='password' id='form2Example2' label='New Password' />
                <MDBInput className='mb-4' type='password' id='form2Example2' label='Retype Password' />
                <MDBBtn type='submit' className='mb-4' block>
                    Save Changes
                </MDBBtn>
            </div>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}>
        <div className='col-md-7 ms-auto me-auto'>
            <h2 className='text-center'>Edit Profile</h2><br></br>
                <center className="mb-3"><img src={`/images/users/${getuser.photo}`} className='rounded-circle img-fluid w-25 img-responsive'/></center>
                <MDBInput className='mb-4' type='file' id='form2Example1' />
                <MDBInput className='mb-4' type='text' value={getuser.fname} id='form2Example1' label='First Name' />
                <MDBInput className='mb-4' type='text' value={getuser.lname} id='form2Example2' label='Last Name' />
                <MDBInput className='mb-4' type='email' value={getuser.email} id='form2Example2' label='Email Address' />
                <MDBInput className='mb-3' type='tel' value={getuser.phone} id='form3Example3' label='Mobile number' />
                <label className='text-start'>Faculty</label>
                <select className='form-control mb-4'>
                    <option>Engineering</option>
                    <option>Medicine</option>
                    <option>Science</option>
                </select>
                <MDBBtn type='submit' className='mb-4' block>
                    Save Changes
                </MDBBtn>
        </div>
        </MDBTabsPane>
      </MDBTabsContent>
          </MDBCol>
        </MDBRow>
         </main>
         </MDBCol>
        </MDBRow>
        </MDBContainer>
      </React.Fragment>
  );
}