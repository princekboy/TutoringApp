import React from 'react';
import Chart from '../../components/Charts'
import { MDBCol, MDBContainer, MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

import TutorSidebar from '../../components/TutorSidebar';
import TutorCharts from '../../components/TutorCharts';

export default function Tutorhome() {
  return (
      <React.Fragment>
        <MDBContainer fluid className=''>
        <MDBRow>
         <MDBCol md='3' className='primary py-5' style={{backgroundColor: 'lightgrey'}}>
          <TutorSidebar />
         </MDBCol>
         <MDBCol md='9'>
         <main>
           <MDBContainer className='mt-5'>
           <h2><i className='fas fa-tachometer-alt'/> Dashboard</h2><hr /><br></br>
             <MDBRow>
               <MDBCol md="4">
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle><h5>All Appointments</h5></MDBCardTitle>
                    <MDBCardText>
                      <h1>8</h1>
                    </MDBCardText>
                    <MDBBtn  tag="a" href="/myappnt">View</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
               </MDBCol>
               <MDBCol md="4">
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle><h5>Pending Appointments</h5></MDBCardTitle>
                    <MDBCardText>
                      <h1>5</h1>
                    </MDBCardText>
                    <MDBBtn tag="a" href="/myappnt">View</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
               </MDBCol>
               <MDBCol md="4">
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle><h5>Active Appointments</h5></MDBCardTitle>
                    <MDBCardText>
                      <h1>3</h1>
                    </MDBCardText>
                    <MDBBtn tag="a" href="/myappnt">View</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
               </MDBCol>
             </MDBRow>
           </MDBContainer>
           <MDBRow>
          <MDBCol md="12" className='text-center my-3'>
          <h3>Chart</h3>
          <TutorCharts />
          </MDBCol>
        </MDBRow>
         </main>
         </MDBCol>
        </MDBRow>
        </MDBContainer>
      </React.Fragment>
  );
}
