import React, { useState } from 'react';
import {
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBInput, 
    MDBBtn
  } from 'mdb-react-ui-kit';

  import TutorSidebar from '../../components/TutorSidebar';

  import Usermale from '../../components/images/user-male.png'

export default function MyProfile() {
    const [showBasic, setShowBasic] = useState(false);

  return (
    <React.Fragment>
        <MDBContainer fluid className=''>
        <MDBRow>
         <MDBCol md='3' className='primary py-5' style={{backgroundColor: 'lightgrey'}}>
          <TutorSidebar />
         </MDBCol>
         <MDBCol md='9'>
         <main>
           <MDBRow>
          <MDBCol md="12" className='text-center my-3'>
          <h2>Profile</h2><hr /><br></br>
          <div className='col-md-7 ms-auto me-auto'>
                <center className="mb-3"><img src={Usermale} className='rounded-circle img-fluid w-25 img-responsive'/></center>
                <label className='text-start'>First Name</label>
                <MDBInput className='mb-4' type='text' disabled id='form2Example1' label='Samuel' />
                <label className='text-start'>Last Name</label>
                <MDBInput className='mb-4' type='text' disabled id='form2Example2' label='Jackson' />
                <label className='text-start'>Email Address</label>
                <MDBInput className='mb-4' type='email' disabled id='form2Example2' label='samueljackson@gmail.com' />
                <label className='text-start'>Phone Number</label>
                <MDBInput className='mb-3' type='tel' disabled id='form3Example3' label='+22 478 374 4338' />
                <label className='text-start'>Qualification</label>
                <MDBInput className='mb-3' type='tel' disabled id='form3Example3' label='Ph.D Computer Science' />
                <label className='text-start'>Faculty</label>
                <select disabled className='form-control mb-4'>
                    <option selected>Engineering</option>
                    <option>Medicine</option>
                    <option>Science</option>
                </select>
                <MDBBtn type='submit' tag="a" href="/mysettings" className='mb-4' block>
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