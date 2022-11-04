import React, { useState } from 'react';
import {
    MDBCardImage, MDBCardBody, MDBRipple, MDBCard,
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

  import TutorSidebar from '../../components/TutorSidebar';

export default function Mystudents() {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = (value) => {
        if (value === basicModal) {
            return;
        }
        setBasicModal(!value);
    } 

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
          <h2>My Students</h2><hr />
          <MDBCard className='py-4 pb-0 px-3'>
          <MDBRow>
              <MDBCol md="4">
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/avatars/3.jpg' fluid alt='...' />
                     <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                     </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol md="8" className='text-start'>
                <h3>John Doe {/* Photo of the Tutor */}</h3>
                <h5 className='text-muted'>Computer Science</h5><hr />
                <p className='text-dark fw-bold'>Details</p>
                <p>Minim laborum esse dolore officia. Sunt consectetur fugiat esse excepteur nostrud nostrud aute consectetur commodo pariatur occaecat consectetur. Excepteur exercitation exercitation quis eiusmod consectetur est aute. Aliqua mollit consequat eiusmod ex officia consequat id adipisicing est enim reprehenderit magna ut. Tempor deserunt sunt elit veniam proident enim et tempor exercitation.</p>
                <MDBBtn onClick={() => setBasicModal('basicModal1')} size='md' rounded><i className='fas fa-user-graduate me-2'></i> View </MDBBtn>
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
                    <MDBCardImage src='https://mdbootstrap.com/img/new/avatars/4.jpg' fluid alt='...' />
                     <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                     </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol md="8" className='text-start'>
                <h3>Freya Allan {/* Photo of the Tutor */}</h3>
                <h5 className='text-muted'>Mechanical Engineering</h5><hr />
                <p className='text-dark fw-bold'>Details</p>
                <p>Minim laborum esse dolore officia. Sunt consectetur fugiat esse excepteur nostrud nostrud aute consectetur commodo pariatur occaecat consectetur. Excepteur exercitation exercitation quis eiusmod consectetur est aute. Aliqua mollit consequat eiusmod ex officia consequat id adipisicing est enim reprehenderit magna ut. Tempor deserunt sunt elit veniam proident enim et tempor exercitation.</p>
                <MDBBtn onClick={() => setBasicModal('basicModal2')} size='md' rounded><i className='fas fa-user-graduate me-2'></i> View </MDBBtn>
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
              <MDBModalTitle>Student Details</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <center>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/avatars/3.jpg' className='w-75' fluid alt='...' />
                     <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                     </a>
                </MDBRipple>
                </center>
                <hr />
                <h3>John Doe {/* Photo of the Tutor */}</h3>
                <h5 className='text-muted'>Computer Science</h5><hr />
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
              <MDBModalTitle>Student Details</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <center>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/avatars/4.jpg' fluid alt='...' />
                     <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                     </a>
                </MDBRipple>
                </center>
                <hr />
                <h3>Freya Allan {/* Photo of the Tutor */}</h3>
                <h5 className='text-muted'>Mechanical Engineering</h5><hr />
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