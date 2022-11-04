import React, { useState } from 'react';
import {
    MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRipple, MDBCard,
    MDBCol,
    MDBRow,
    MDBContainer, 
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter
  } from 'mdb-react-ui-kit';

  import axios from 'axios';
  import { useParams } from 'react-router-dom';
  import { useEffect } from 'react';

export default function Tutors() {
    const [basicModal, setBasicModal] = useState(false);
    const [getuser, getUser] = useState('');
    const toggleShow = (value) => {
        if (value === basicModal) {
            return;
        }
        setBasicModal(!value);
    } 

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
          <h2>Tutors</h2><hr />
          <MDBCard className='py-4 pb-0 px-3'>
          <MDBRow>
              <MDBCol md="4">
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/avatars/8.jpg' fluid alt='...' />
                     <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                     </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol md="8" className='text-start'>
                <h3>Samuel Jackson {/* Photo of the Tutor */}</h3>
                <h5 className='text-muted'>Ph.D Engineering</h5><hr />
                <p className='text-dark fw-bold'>Details</p>
                <p>Minim laborum esse dolore officia. Sunt consectetur fugiat esse excepteur nostrud nostrud aute consectetur commodo pariatur occaecat consectetur. Excepteur exercitation exercitation quis eiusmod consectetur est aute. Aliqua mollit consequat eiusmod ex officia consequat id adipisicing est enim reprehenderit magna ut. Tempor deserunt sunt elit veniam proident enim et tempor exercitation.</p>
                <MDBBtn onClick={() => setBasicModal('basicModal1')} size='md' rounded><i className='fas fa-envelope me-2'></i> Contact </MDBBtn>
              </MDBCol>
          </MDBRow>    
            <MDBCardBody>
            </MDBCardBody>
          </MDBCard><hr />
          {/* ============================ Just a Separator============================= */}
          <MDBCard className='py-4 pb-0 px-3'>
          <MDBRow>
              <MDBCol md="4">
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/avatars/5.jpg' fluid alt='...' />
                     <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                     </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol md="8" className='text-start'>
                <h3>Selina Alex {/* Photo of the Tutor */}</h3>
                <h5 className='text-muted'>B.Sc Science</h5><hr />
                <p className='text-dark fw-bold'>Details</p>
                <p>Minim laborum esse dolore officia. Sunt consectetur fugiat esse excepteur nostrud nostrud aute consectetur commodo pariatur occaecat consectetur. Excepteur exercitation exercitation quis eiusmod consectetur est aute. Aliqua mollit consequat eiusmod ex officia consequat id adipisicing est enim reprehenderit magna ut. Tempor deserunt sunt elit veniam proident enim et tempor exercitation.</p>
                <MDBBtn onClick={() => setBasicModal('basicModal2')} size='md' rounded><i className='fas fa-envelope me-2'></i> Contact </MDBBtn>
              </MDBCol>
          </MDBRow>    
            <MDBCardBody>
            </MDBCardBody>
          </MDBCard>
          {/* ============================ Just a Separator============================= */}
          </MDBCol>
        </MDBRow>
         </main>
         </MDBCol>
        </MDBRow>
        </MDBContainer>
        {/* ================================= Just a separator ============================================== */}
        <MDBModal show={basicModal === 'basicModal1'} staticBackdrop tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Tutor Details</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <center>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/avatars/8.jpg' className='w-75' fluid alt='...' />
                     <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                     </a>
                </MDBRipple>
                </center>
                <hr />
                <h3>Samuel Jackson {/* Photo of the Tutor */}</h3>
                <h5 className='text-muted'>Ph.D Engineering</h5><hr />
                <p className='text-dark fw-bold'>Details</p>
                <p>Minim laborum esse dolore officia. Sunt consectetur fugiat esse excepteur nostrud nostrud aute consectetur commodo pariatur occaecat consectetur. Excepteur exercitation exercitation quis eiusmod consectetur est aute. Aliqua mollit consequat eiusmod ex officia consequat id adipisicing est enim reprehenderit magna ut. Tempor deserunt sunt elit veniam proident enim et tempor exercitation.</p>
                <p><i className='fas fa-phone-square me-2' /> Phone: +22 736 2873 3528</p>
                <p><i className='fas fa-envelope me-2' /> Email: samueljackson@gmail.com</p>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='primary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* ================================= Just a separator ============================================== */}
      <MDBModal show={basicModal === 'basicModal2'} staticBackdrop tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Tutor Details</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <center>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/avatars/5.jpg' fluid alt='...' />
                     <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                     </a>
                </MDBRipple>
                </center>
                <hr />
                <h3>Selina Alex {/* Photo of the Tutor */}</h3>
                <h5 className='text-muted'>B.Sc Science</h5><hr />
                <p className='text-dark fw-bold'>Details</p>
                <p>Minim laborum esse dolore officia. Sunt consectetur fugiat esse excepteur nostrud nostrud aute consectetur commodo pariatur occaecat consectetur. Excepteur exercitation exercitation quis eiusmod consectetur est aute. Aliqua mollit consequat eiusmod ex officia consequat id adipisicing est enim reprehenderit magna ut. Tempor deserunt sunt elit veniam proident enim et tempor exercitation.</p>
                <p><i className='fas fa-phone-square me-2' /> Phone: +22 736 2873 7632</p>
                <p><i className='fas fa-envelope me-2' /> Email: selinaalex@gmail.com</p>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='primary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* ================================= Just a separator ============================================== */}
      </React.Fragment>
  );
}