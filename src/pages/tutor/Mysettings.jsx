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

  import Usermale from '../../components/images/user-male.png'

  import TutorSidebar from '../../components/TutorSidebar';

export default function Mysettings() {

  const [fillActive, setFillActive] = useState('tab1');

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
          <TutorSidebar />
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
                <center className="mb-3"><img src={Usermale} className='rounded-circle img-fluid w-25 img-responsive'/></center>
                <MDBInput className='mb-4' type='file' id='form2Example1' />
                <MDBInput className='mb-4' type='text' id='form2Example1' label='First Name' />
                <MDBInput className='mb-4' type='text' id='form2Example2' label='Last Name' />
                <MDBInput className='mb-4' type='email' id='form2Example2' label='Email Address' />
                <MDBInput className='mb-3' type='tel' id='form3Example3' label='Mobile number' />
                <MDBInput className='mb-3' type='tel' id='form3Example3' label='Qualification' />
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