import React, { useState } from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBContainer,
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';
import background from "../components/images/bg.jpg";
export default function TutorLogin() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <React.Fragment>
        <title>Tutor Login</title>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${background})`, height: 600 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Tutoring App</h1>
              <h4 className='mb-3'>Login to Tutor Dashboard</h4>
            </div>
          </div>
        </div>
      </div>
      <main>
        <MDBContainer fluid>
          <MDBRow className='mb-3 my-5'>
            <MDBCol md='7' className='me-auto ms-auto'>
            <form>
                <h2 className='text-center'>Tutor Login</h2><br></br>
                <MDBInput className='mb-4' type='text' id='form2Example1' label='Username' />
                <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />
                <MDBRow className='mb-4'>
                    <MDBCol className='d-flex justify-content-center'>
                    <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                    </MDBCol>
                    <MDBCol>
                    <a href='#!'>Forgot password?</a>
                    </MDBCol>
                </MDBRow>

                <MDBBtn type='submit' className='mb-4' block>
                    Sign in
                </MDBBtn>
            </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </main>
    </React.Fragment>
  );
}